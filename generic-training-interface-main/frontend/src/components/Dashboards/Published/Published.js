import React from "react";
import MainNavbarInstructor from "../../Navbars/MainNavbar/MainNavbarInstructor";
import "./Published.css";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';

const Published = () => {

  return (
    <div className="dashboard">
    <MainNavbarInstructor/>

    <div className="user-info">
      <h2>
       Published Courses
        <div className=" container row" style={{padding:"2%"}}>
              <div className="row">
                <div className="col-sm-4" >
                </div>
                <div className="col-sm-8">
                    <div className='row'>
                      <div className='col-sm in-progress'>
                        <div className="row">
                          <div className="col-sm-3 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>2</div>
                          <div className="col-sm-9" style={{fontSize:"20px", marginTop:"4%"}}>Uploaded Courses</div>
                        </div>
                        </div>
                      <div className='col-sm completed'>
                         <div className="row" style={{padding:"2%"}}>
                           <div className="col-sm-4 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>10</div>
                           <div className="col-sm-8" style={{fontSize:"20px", marginTop:"3%"}}>Published Courses </div>
                         </div>
                      </div>
                      <div className='col-sm enrolled' >
                      <div className="row">
                           <div className="col-sm-3 " style={{textAlign: "center", marginTop:"2%", fontSize:"45px"}}>1</div>
                           <div className="col-sm-9" style={{fontSize:"20px", marginTop:"4%"}}>Unpublished Courses</div>
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
        <td><Badge pill bg="success">Published</Badge>{' '}
        </td>
      </tr>
      <tr>
      <td>2</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="success">Published</Badge>{' '}
       </td>
      </tr>
      
      <tr>
      <td>4</td>
        <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="success">Published</Badge>{' '}
        </td>
      </tr>
      <tr>
      <td>5</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="success">Published</Badge>{' '}
       </td>
      </tr>
      
      <tr>
      <td>7</td>
        <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="success">Published</Badge>{' '}
        </td>
      </tr>
      <tr>
      <td>8</td>
      <td>Software Engineering</td>
        <td>Introduction to Scrum</td>
        <td>May 26, 2019 at 9:15pm </td>
        <td><Badge pill bg="success" >Published</Badge>{' '}
        </td>
      </tr>
    
      
    </tbody>
  </Table>
  </div>
    </div>
   
  </div>
  );
}

export default Published;