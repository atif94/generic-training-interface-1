import React, {useState} from "react";
import "./createLesson.css";
import VideoInput from "../SceneBuilder/DualScene/VideoInput";
import Puzzle from "../SceneComponents/Puzzle/Puzzle";
import { useNavigate,  } from "react-router-dom";
import QuizBuilder from "../SceneBuilder/DualScene/QuizBuilder";
import MainNavbarInstructor from "../Navbars/MainNavbar/MainNavbarInstructor";
import QuadSceneInstructor from "../SceneBuilder/QuadScene/QuadSceneInstructor";


function CreateLesson({ setOpenCreateLesson }) {
   const [status, setStatus] = useState(null);
    const nvg = useNavigate();

    function changeStatus(e) {
      const pge = e.target.value
      setStatus(pge)
      switch(pge) {
        case "textQuiz":
          nvg("/dualScene")
          return
        case "videoQuiz":
          nvg("/quizbuilder")
          return
        case "video":
          nvg("/videoinput")
          return
        case "puzzle":
            nvg("/puzzle")
            return
        case "quiz":
          nvg("/quiz")
          return
        case "text":
          nvg("/text")
          return
        case "videoQuizText":
          nvg("/trioScene")
          return
        default:
          return
          
      }
      
    }

    return (
      <div>
         <MainNavbarInstructor />
         <div className="modalBackground">
          <div className="modalContainer">
             
            <div className="titleCloseBtn">
              <button
                  onClick={() => {
                    setOpenCreateLesson(false);
                  }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>Create Lesson</h1>
            </div>
            <div className="body">
              <p>You can create lesson here by selecting the Scene type and Display View</p>
            </div>
            <div className="dropDownTitle">
              <h2>Scene Display(s)</h2>
            </div>
            <div className="dropDown">
              <select  onChange={changeStatus}>
              <option value="#">Select scene...</option>
                <option value="video">Video</option>
                <option value="text">Text</option>
                <option value="quiz">Quiz</option>
                <option value="videoQuiz">Video, Quiz</option>
                <option value="textQuiz">Text, Quiz</option>
                <option value="videoQuizText">Video, Quiz, Text</option>
                
               
              </select>
             
            </div>
            <div className="footer">
            </div>
          </div>
        </div>
      </div>
       
    );
}

export default CreateLesson;
