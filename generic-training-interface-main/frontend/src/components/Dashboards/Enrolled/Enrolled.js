import React from "react";
import MainNavbar from "../../Navbars/MainNavbar/MainNavbar";
import "./Enrolled.css";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';

const Enrolled = () => {
  // TODO: number for VideoScene/DualScene buttons
  // TODO: live course feed on main div
  async function getEnrolledCourse(courseId) {
    return await axios.get('http://localhost:5000/student/getCourse', {
      params: {
        "course-id": courseId
      }
    });
  }

  async function getEnrolledAwait() {
    const response = await getEnrolledCourse(1);
    console.log(response.data)
  }

  return (
    <div className="dashboard">
    <MainNavbar />

    <div className="user-info">
      <h2>
       Enrolled Courses
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
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="success">Completed</Badge>{' '}
        </td>
      </tr>
      <tr>
      <td>2</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="warning" text="dark">In Progress</Badge>{' '}</td>
      </tr>
      <tr>
      <td>3</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="danger"> Not Started </Badge>{' '}</td>
      </tr>
      <tr>
      <td>4</td>
        <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="success">Completed</Badge>{' '}
        </td>
      </tr>
      <tr>
      <td>5</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="warning" text="dark">In Progress</Badge>{' '}</td>
      </tr>
      <tr>
      <td>6</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="danger"> Not Started </Badge>{' '}</td>
      </tr>
      <tr>
      <td>7</td>
        <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="success">Completed</Badge>{' '}
        </td>
      </tr>
      <tr>
      <td>8</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="warning" text="dark">In Progress</Badge>{' '}</td>
      </tr>
      <tr>
      <td>9</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="danger">Not Started </Badge>{' '}</td>
      </tr>
      <tr>
      <td>10</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="danger"> Not Started </Badge>{' '}</td>
      </tr>
    </tbody>
  </Table>
  </div>
    </div>
   
  </div>
  );
}

export default Enrolled;