import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "react-hooks-use-modal";
import { auth } from "../../../services/firebase";
import MainNavbarInstructor from "../../Navbars/MainNavbar/MainNavbarInstructor";

import "./Dashboard.css";
import classroomImg from "../../../classroom.png";

const DashboardInstructor = ({ user }) => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  function alertpop() {
    alert("You've successfully uploaded a Course");
    close();
  }
  // TODO: number for VideoScene/DualScene buttons
  // TODO: live course feed on main div
  return (
    <div className="dashboard">
      
      <MainNavbarInstructor />

      <div className="user-info">
        <h2>
         
          {/*<img src={user.photoURL} alt="" />*/}
          <a className="sign-out" onClick={() => auth.signOut()}>
            (Sign out)
          </a>
          <div className=" container row">
                <div className="row">
                  <div className="col-sm-4" >
                    <h2>Welcome</h2>
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
      <div className="main">
        <img className="classroom-img" src={classroomImg} alt={"A classroom"} />
        <h3>
          No Lesson Uploaded! Submit a  new course now
          <button className="join-course" onClick={open} style={{backgroundColor:"#6DD8FB", padding:"1%", color: "black"}}>
            Upload a Lesson
          </button>
        </h3>
      </div>
      <Modal>
        insert the modal here
      </Modal>
    </div>
  );
};

export default DashboardInstructor;
