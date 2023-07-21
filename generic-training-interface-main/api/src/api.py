import time
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from waitress import serve
import mariadb
import sys
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

try:
    # TODO: FIX HOST TO AWS DYNAMIC IP
    conn = mariadb.connect(
        user="root",
        password="root",
        host="34.221.185.65",
        port=3301,
        database="gts"
    )
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)

cur = conn.cursor()
active_users = dict()


def __result_to_json(cur_desc, cur_fetch):
    cols = cur_desc
    return jsonify([{cols[i][0]: col for i, col in enumerate(value)} for value in cur_fetch])


@app.route('/admin/setUser', methods=['POST'])
def set_user():
    names = request.json["name"].rsplit(" ", 1)
    try:
        cur.execute(f"""
            SELECT * FROM gts.user
            WHERE firebase_id = '{request.json["firebaseId"]}'
        """)
        if cur.fetchone():
            return "User already exists"

        cur.execute("""
            INSERT INTO gts.user (firebase_id, first_name, last_name, user_type)
            VALUES (?, ?, ?, ?)
        """, (request.json["firebaseId"], names[0], names[-1], request.json["userType"])
        )
    except mariadb.Error as e:
        print(f"Error: {e}")
    conn.commit()
    return jsonify(request.json)


@app.route('/admin/firebaseToUserId', methods=['GET'])
def firebase_to_userid():
    f_id = request.args.get('firebase-id')
    if f_id in active_users:
        return str(active_users[f_id])

    try:
        cur.execute(f"""
            SELECT user_id FROM gts.user
            WHERE firebase_id = '{f_id}'
        """)
    except mariadb.Error as e:
        print(f"Error: {e}")

    u_id = str(cur.fetchone())[1:-2]
    active_users[f_id] = int(u_id)
    return u_id


"""
if the asset is text, use asset_text; videos, images, and puzzles will use asset_url
quizzes will use their own table
asset_type:
    1: video
    2: text
    3: puzzle
    4: quiz
    5: image
"""


@app.route('/admin/insertAsset', methods=['POST'])
def insert_asset():
    try:
        cur.execute("""
            INSERT INTO gts.asset (asset_type, asset_url, asset_title, asset_text)
            VALUES (?, ?, ?, ?)
        """, (
            request.json["assetType"], request.json["assetUrl"], request.json["assetTitle"], request.json["assetText"])
                    )
    except mariadb.Error as e:
        print(f"Error: {e}")
    conn.commit()
    return jsonify(request.json)


@app.route('/admin/getAsset', methods=['GET'])
def get_asset():
    try:
        cur.execute(f"""
            SELECT * FROM gts.asset
            WHERE asset_id = '{request.args.get('asset-id')}'
        """)
    except mariadb.Error as e:
        print(f"Error: {e}")

    return __result_to_json(cur.description, cur.fetchall())


@app.route('/admin/arbitrary', methods=['POST'])
def arbitrary():
    try:
        cur.execute(request.json["arbitrary"])
    except mariadb.Error as e:
        print(f"Error: {e}")

    return __result_to_json(cur.description, cur.fetchall())


@app.route('/instructor/createCourse', methods=['POST'])
def create_course():
    try:
        cur.execute("""
            INSERT INTO gts.course (course_name, course_desc, instructor_id)
            VALUES (?, ?, ?)
        """, (request.json["courseName"], request.json["courseDesc"], request.json["instructorId"])
                    )
        conn.commit()
        cur.execute("""
            SELECT course_id FROM gts.course
            ORDER BY last_update DESC
            LIMIT 1;
        """)
    except mariadb.Error as e:
        print(f"Error: {e}")

    return f"The course ID is: {str(cur.fetchone())[1:-2]}. Give it to your students so they can enroll!"


@app.route('/instructor/createScene', methods=['POST'])
def create_scene():
    try:
        cur.execute("""
            INSERT INTO gts.scene (scene_num, scene_title, course_id, asset1, asset2, asset3, asset4)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (request.json["sceneNum"], request.json["sceneTitle"], request.json["courseId"],
              request.json["asset1"], request.json["asset2"], request.json["asset3"], request.json["asset4"])
                    )
    except mariadb.Error as e:
        print(f"Error: {e}")
    conn.commit()
    return jsonify(request.json)


@app.route('/instructor/createQuiz', methods=['POST'])
def create_quiz():
    try:
        cur.execute("""
            INSERT INTO gts.quiz_question (asset_id, question1, question2, question3, question4, 
            question5, question6, question7, question8, question9, question10)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (request.json["assetId"], request.json["q1"], request.json["q2"], request.json["q3"],
              request.json["q4"], request.json["q5"], request.json["q6"], request.json["q7"],
              request.json["q8"], request.json["q9"], request.json["q10"])
        )

        cur.execute("""
            INSERT INTO gts.quiz_answer (asset_id, answer1, answer2, answer3, answer4, 
            answer5, answer6, answer7, answer8, answer9, answer10)
            
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (request.json["assetId"], request.json["a1"], request.json["a2"], request.json["a3"],
              request.json["a4"], request.json["a5"], request.json["a6"], request.json["a7"],
              request.json["a8"], request.json["a9"], request.json["a10"])
        )

    except mariadb.Error as e:
        print(f"Error: {e}")
    conn.commit()
    return jsonify(request.json)


@app.route('/instructor/getResponse', methods=['GET'])
def get_response():
    try:
        cur.execute(f"""
            SELECT * FROM gts.student_response 
            WHERE asset_id = {request.args.get('asset-id')}
        """)

    except mariadb.Error as e:
        print(f"Error: {e}")

    return __result_to_json(cur.description, cur.fetchall())


@app.route('/student/saveResponse', methods=['POST'])
def save_response():
    try:
        cur.execute("""
            INSERT INTO gts.student_response (user_id, asset_id, answer1, answer2, answer3, answer4, 
            answer5, answer6, answer7, answer8, answer9, answer10)
        """, (request.json["userId"], request.json["assetId"], request.json["a1"], request.json["a2"],
              request.json["a3"], request.json["a4"], request.json["a5"], request.json["a6"],
              request.json["a7"], request.json["a8"], request.json["a9"], request.json["a10"])
        )
    except mariadb.Error as e:
        print(f"Error: {e}")
    conn.commit()
    return jsonify(request.json)


@app.route('/student/enrollStudent', methods=['POST'])
def enroll_student():
    try:
        cur.execute("""
            INSERT INTO gts.enrolled (user_id, course_id)
            VALUES (?, ?)
        """, (request.json["userId"], request.json["courseId"])
                    )
    except mariadb.Error as e:
        print(f"Error: {e}")
    conn.commit()
    return jsonify(request.json)


@app.route('/student/getCourse', methods=['GET'])
def get_course():
    try:
        cur.execute(f"""
            SELECT * FROM gts.course
            WHERE course_id = {request.args.get('course-id')}
        """
                    )
    except mariadb.Error as e:
        print(f"Error: {e}")

    return __result_to_json(cur.description, cur.fetchall())


@app.route('/student/getScene', methods=['GET'])
def get_scene():
    try:
        cur.execute(f"""
            SELECT * FROM gts.scene
            WHERE scene_id = {request.args.get('scene-id')}
        """
                    )
    except mariadb.Error as e:
        print(f"Error: {e}")

    return __result_to_json(cur.description, cur.fetchall())


# if __name__ == "__main__":
#     serve(app, host='0.0.0.0', port=8000)
