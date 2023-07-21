import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "react-hooks-use-modal";
import { auth } from "../../../services/firebase";
import MainNavbar from "../../Navbars/MainNavbar/MainNavbar";
import "./Dashboard.css";
import classroomImg from "../../../classroom.png";
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  async function alertpop(courseIdEntry) {
    let uid;
    await axios.get('http://34.221.185.65:5000/admin/firebaseToUserId?firebase-id=' + user.uid).then(response => {
      uid = response.data;
      console.log("SUCCESS", uid)
    });
    axios.post('http://34.221.185.65:5000/student/enrollStudent', {
      userId: uid,
      courseId: courseIdEntry
    }).then(response => {
      console.log("SUCCESS", response)
    }).catch(error => {
      console.log(error)
    })

    alert("You've been enrolled for this course");
    close();
  }
  // TODO: number for VideoScene/DualScene buttons
  // TODO: live course feed on main div
  function handleSubmit(e) {
    e.preventDefault();
    const {courseIdEntry} = e.target.elements;
    console.log({courseIdEntry: courseIdEntry.value});
    alertpop(courseIdEntry.value);
  }
  return (
    <div className="dashboard">
      
      <MainNavbar />
      <div className="user-info">
        <h2>
         
          {/*<img src={user.photoURL} alt="" />*/}
          <a className="sign-out" onClick={() => auth.signOut()}>
            (Sign out)
          </a>
          <div className=" container row">
                <div className="row">
                  <div className="col-sm-4" >
                    <h2>Welcome, {user.displayName}</h2>
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
      <div className="main">
        <img className="classroom-img" src={classroomImg} alt={"A classroom"} />
        <h3>
          No courses joined! Enroll in a course now
          <button className="join-course" onClick={open}>
            Join a course
          </button>
        </h3>
      </div>
      <Modal>
        <div className="modal-content">
          <div>
            <form onSubmit={handleSubmit}>
            <label className="courseLabel">
              Course ID:&nbsp;&nbsp;&nbsp;
            </label>
              <input type="text" name="name" className="textfield" id="courseIdEntry"/>
              <input type="submit" className="join" value="Join"/>
            </form>
            <button className="close" onClick={close}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
