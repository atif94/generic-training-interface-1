import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enrolled from "./components/Dashboards/Enrolled/Enrolled";
import Completed from "./components/Dashboards/Completed/completed";
import InProgress from "./components/Dashboards/Progress/inprogress";
import QuadSceneInstructor from "./components/SceneBuilder/QuadScene/QuadSceneInstructor";
//import DualScene from "./components/SceneBuilder/DualScene/DualScene";
import Gradebook from "./components/Gradebook/Gradebook";
import QuadScene from "./components/SceneBuilder/QuadScene/QuadScene";
import TrioScene from "./components/SceneBuilder/TrioScene/TrioScene";
import DualScene from "./components/SceneBuilder/DualScene/DualScene";
import VideoScene from "./components/SceneBuilder/VideoScene/VideoScene";
import DashboardInstructor from "./components/Dashboards/Dashboard/DashboardInstructor";
import Published from "./components/Dashboards/Published/Published";
import Unpublished from "./components/Dashboards/Unpublished/Unpublished";
import Uploaded from "./components/Dashboards/Uploaded/Uploaded";
import CreateLesson from "./components/CreateLesson/createLesson";
import QuizBuilder from "./components/SceneBuilder/DualScene/QuizBuilder";
import VideoInput from "./components/SceneBuilder/DualScene/VideoInput";
import Puzzle from "./components/SceneComponents/Puzzle/Puzzle";
import Text from "./components/SceneComponents/Text/Text";
import Quiz from "./components/SceneComponents/Quiz/Quiz"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/enrolled" element={<Enrolled />} />
        {/* TODO: rename inprocess to inProgress */}
        <Route path="/inprocess" element={<InProgress />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/gradebook" element={<Gradebook />} />
        <Route path="/quadScene" element={<QuadScene />} />
        <Route path="/dualScene" element={<DualScene />} />
        <Route path="/trioScene" element={<TrioScene />} />
        <Route path="/videoScene" element={<VideoScene />} />
        <Route path="/dashboard" element={<DashboardInstructor/>}/>
        <Route path="/published" element={<Published />} />
        <Route path="/unpublished" element={<Unpublished/>} />
        <Route path="/uploaded" element={<Uploaded />} />
        <Route path="/createlesson" element={<CreateLesson />} />
        <Route path="/quadScene/Instructor" element={<QuadSceneInstructor />} />
        <Route path="quizbuilder" element={<QuizBuilder/>} />
        <Route path="videoinput" element={<VideoInput/>} />
        <Route path="puzzle" element={<Puzzle/>} />
        <Route path="text" element={<Text/>} />
        <Route path="quiz" element={<Quiz/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
