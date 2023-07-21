import React from "react";
import "./LoginSelection.css";
import {signInWithGoogle} from "../../services/firebase";


function LoginSelection({ setOpenLoginSelection }) {
    function handleSubmit(e) {
    e.preventDefault();
    const {userEntry} = e.target.elements;
    console.log({userEntry: userEntry.value});
    window.userType = userEntry.value === "Instructor" ? 2 : 1;
    console.log(window.userType)
  }
  return (
    <div className="modalLoginBackgrounds">
      <div className="modalLoginContainer">
        <div className="titleCloseBtnLogin">
          <button
            onClick={() => {
                setOpenLoginSelection(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="body">
          <p>Are you signing in as a student or instructor?</p>
        </div>
        <div className="optionTitle">
          <h2>Select a Role:</h2>
        </div>
        <div className="loginOptions">
          <form onSubmit={handleSubmit}>
            <input type="radio" value="Student" name="role" id="userEntry" /> Student &nbsp;
            <input type="radio" value="Instructor" name="role" id="userEntry"/> Instructor
            <br/>
            <input type="submit" className="button" onClick={signInWithGoogle} />
          </form>
        </div>
        {/*<div className="footer">*/}
        {/*<button className="button" onClick={signInWithGoogle}><i className="fab fa-google"/>Select Role and Login with Google</button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default LoginSelection;