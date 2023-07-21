import React from "react";
import { Link } from "react-router-dom";
import MainNavbar from "../../Navbars/MainNavbar/MainNavbar";
import "./inprogress.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import axios from "axios";

const InProgress = () => {
  async function getInProgress() {
    let apiUid;
    await axios.get('http://34.221.185.65:5000/admin/firebaseToUserId?firebase-id=' + window.user.uid)
    .then(response => {
      apiUid = response.data;
      console.log("SUCCESS", apiUid)
    }).catch(error => {
      console.log(error)
    });
    // TODO
    axios.post('http://34.221.185.65:5000/admin/arbitrary', {
        arbitrary:  "select * from gts.course inner join gts.enrolled on gts.enrolled.course_id = gts.course.course_id where gts.enrolled.user_id =" + apiUid
    }).then(response => {
      console.log("SUCCESS", response)
    }).catch(error => {
      console.log(error)
    });
  }

  return (
    <div className="dashboard">
    <MainNavbar />
      {console.log(getInProgress())}
    <div className="user-info">
      <h2>
        In Progress Courses
        <div className=" container row" style={{padding:"2%"}}>
              <div className="row">
                <div className="col-sm-4" >
                </div>
                <div className="col-sm-8">
                  <div className='row'>
                    <div className='col-sm in-progress'>
                      <div className="row">
                        <div className="col-sm-3 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>2</div>
                        <div className="col-sm-9" style={{fontSize:"20px", marginTop:"4%"}}>Course In Progress</div>
                      </div>
                      </div>
                    <div className='col-sm completed'>
                       <div className="row" style={{padding:"2%"}}>
                         <div className="col-sm-4 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>50</div>
                         <div className="col-sm-8" style={{fontSize:"20px", marginTop:"3%"}}>Courses Completed</div>
                       </div>
                    </div>
                    <div className='col-sm enrolled' >
                    <div className="row">
                         <div className="col-sm-3 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>4</div>
                         <div className="col-sm-9" style={{fontSize:"20px", marginTop:"4%"}}> Enrolled Courses</div>
                       </div>
                    </div>
                </div>            
              </div>
              </div>
      </div>
        
        
      </h2>
    </div>
    <div className="container" style={{marginTop:"2%"}}>
    <div>
  <Table responsive="sm">
    <thead>
      <tr>    
        <td>#</td>  
        <th>Course Name</th>
        <th>Topics</th>
        <th>Date Upload</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
      <td>1</td>
        <td>Software Engineering</td>
        <td>Web Languages Quiz and Video</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Link to="/videoScene">
          <Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}
        </Link>
        </td>
      </tr>
      <tr>
      <td>2</td>
      <td>Software Engineering</td>
        <td>Video, Quiz, Text, and Puzzle</td>
        <td>May 26, 2019 at 9:15pm</td>
          <td><Link to="/quadScene">
            <Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}
          </Link>
          </td>
      </tr>
      <tr>
      <td>3</td>
      <td>Software Engineering</td>
        <td>Scrum Quiz</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Link to="/dualScene">
          <Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}
        </Link>
        </td>
         </tr>
      <tr>
      <td>4</td>
        <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}
        </td>
      </tr>
      <tr>
      <td>5</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}</td>
      </tr>
      <tr>
      <td>6</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}</td>
      </tr>
      <tr>
      <td>7</td>
        <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}
        </td>
      </tr>
      <tr>
      <td>8</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}</td>
      </tr>
      <tr>
      <td>9</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}</td>
      </tr>
      <tr>
      <td>10</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}>View Scenes</Button>{' '}</td>
      </tr>
    </tbody>
  </Table>
  </div>
    </div>
   
  </div>
  );
}

export default InProgress;