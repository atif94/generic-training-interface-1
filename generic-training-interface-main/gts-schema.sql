SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

DROP SCHEMA IF EXISTS gts;
CREATE SCHEMA gts;
USE gts;

--
-- Table structure for table `user`
-- user_type:
--    1: student
--    2: developer 
--    3: instructor
--
CREATE TABLE user (
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  user_type TINYINT UNSIGNED NOT NULL,
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `course`
--
CREATE TABLE course (
  course_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  course_name VARCHAR(100) NOT NULL,
  course_desc TEXT DEFAULT NULL,
  instructor_id INT UNSIGNED NOT NULL,
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (course_id),
  CONSTRAINT `fk_course_instructor` FOREIGN KEY (instructor_id) REFERENCES user (user_id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `enrolled`
--
CREATE TABLE enrolled (
  enrollment_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  course_id INT UNSIGNED NOT NULL,
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (enrollment_id),
  CONSTRAINT `fk_enrolled_user` FOREIGN KEY (user_id) REFERENCES user (user_id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_enrolled_course` FOREIGN KEY (course_id) REFERENCES course (course_id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `asset`
-- if the asset is text, use asset_text; videos, images, and puzzles will use asset_url 
-- quizzes will use their own table
-- asset_type:
--    1: video
--    2: text
--    3: puzzle
--    4: quiz
--    5: image
--
CREATE TABLE asset (
  asset_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  asset_type TINYINT UNSIGNED NOT NULL,
  asset_url TEXT DEFAULT NULL,
  asset_title VARCHAR(100) DEFAULT NULL,
  asset_text TEXT DEFAULT NULL,
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (asset_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `scene`
--
CREATE TABLE scene (
  scene_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  scene_num SMALLINT NOT NULL,
  scene_title VARCHAR(100) DEFAULT NULL,
  course_id INT UNSIGNED NOT NULL,
  asset1 INT UNSIGNED DEFAULT NULL,
  asset2 INT UNSIGNED DEFAULT NULL,
  asset3 INT UNSIGNED DEFAULT NULL,
  asset4 INT UNSIGNED DEFAULT NULL,
  PRIMARY KEY (scene_id),
  CONSTRAINT `fk_scene_course` FOREIGN KEY (course_id) REFERENCES course (course_id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_scene_asset1` FOREIGN KEY (asset1) REFERENCES asset (asset_id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_scene_asset2` FOREIGN KEY (asset2) REFERENCES asset (asset_id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_scene_asset3` FOREIGN KEY (asset3) REFERENCES asset (asset_id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_scene_asset4` FOREIGN KEY (asset4) REFERENCES asset (asset_id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `quiz_question`
-- open ended questions will use question1 only.
--
CREATE TABLE quiz_question (
  asset_id INT UNSIGNED NOT NULL,
  question1 TEXT DEFAULT NULL,
  question2 TEXT DEFAULT NULL,
  question3 TEXT DEFAULT NULL,
  question4 TEXT DEFAULT NULL,
  question5 TEXT DEFAULT NULL,
  question6 TEXT DEFAULT NULL,
  question7 TEXT DEFAULT NULL,
  question8 TEXT DEFAULT NULL,
  question9 TEXT DEFAULT NULL,
  question10 TEXT DEFAULT NULL,
  PRIMARY KEY (asset_id),
  CONSTRAINT `fk_quizques_assetid` FOREIGN KEY (asset_id) REFERENCES asset (asset_id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `quiz_answer`
-- open ended questions will use answer1 only.
--
CREATE TABLE quiz_answer (
  asset_id INT UNSIGNED NOT NULL,
  answer1 TEXT DEFAULT NULL,
  answer2 TEXT DEFAULT NULL,
  answer3 TEXT DEFAULT NULL,
  answer4 TEXT DEFAULT NULL,
  answer5 TEXT DEFAULT NULL,
  answer6 TEXT DEFAULT NULL,
  answer7 TEXT DEFAULT NULL,
  answer8 TEXT DEFAULT NULL,
  answer9 TEXT DEFAULT NULL,
  answer10 TEXT DEFAULT NULL,
  CONSTRAINT `fk_quizans_assetid` FOREIGN KEY (asset_id) REFERENCES asset (asset_id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE student_response (
  response_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  asset_id INT UNSIGNED NOT NULL,
  answer1 TEXT DEFAULT NULL,
  answer2 TEXT DEFAULT NULL,
  answer3 TEXT DEFAULT NULL,
  answer4 TEXT DEFAULT NULL,
  answer5 TEXT DEFAULT NULL,
  answer6 TEXT DEFAULT NULL,
  answer7 TEXT DEFAULT NULL,
  answer8 TEXT DEFAULT NULL,
  answer9 TEXT DEFAULT NULL,
  answer10 TEXT DEFAULT NULL,
  PRIMARY KEY (response_id),
  CONSTRAINT `fk_studentres_assetid` FOREIGN KEY (asset_id) REFERENCES asset (asset_id) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_studentres_userid` FOREIGN KEY (user_id) REFERENCES user (user_id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;