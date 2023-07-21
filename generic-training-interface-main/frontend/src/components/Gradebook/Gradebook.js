import React, {useState} from 'react'
//import '../App.css';
//import QuizIcon from '@mui/icons-material/Quiz';
import data from './mock-data.json';
import './Gradebook.css';
import MainNavbar from "../Navbars/MainNavbar/MainNavbar";
//import Navbar from './Navbar';

function Gradebook() {
  const [grades, setGrades] = useState(data);
  return (
    <div className="Gradebook" >
      <MainNavbar/>
      <div className='container'>
      <div className="Title">
        <h2>Grades</h2>
      </div>
      <div className="totalQuizScore">
        <table>
        <thead>
          <tr>
            <th>Total Points</th>
            <th>Total Score</th>
            <th>Letter Grade</th>
          </tr>
        </thead>
        <tbody>        
          <tr>
            <td>400 / 500</td>
            <td>80%</td>
            <td>B-</td>
          </tr>
        </tbody>
      </table>
    </div>
      <div className="quizScore">
        <table>
          <thead>
           <tr>
              <th>  Quiz Name</th>
              <th>Final Score</th>
              <th>Date of Submission</th>
              <th>View Quiz Detail</th>
           </tr>
           
          </thead>
          <tbody>
            {grades.map((grade)=>           
            <tr>
              <td>{grade.QuizName}</td>
             <td>{grade.FinalScore}</td>
             <td>{grade.DateOfSubmission}</td>
             <td><button onClick={() =>{ }}>Open Quiz</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      </div>

     
  </div>
  )
}

export default Gradebook;