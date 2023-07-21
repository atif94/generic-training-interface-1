import {signInWithGoogle} from "../../services/firebase";
import "./Login.css"
import epLogo from "../../EPlogo.png";
import LoginSelection from "./LoginSelection";
import React, { useState } from "react";

const Login = () => {
  const [LoginSelectionOpen, setLoginSelectionOpen] = useState(false);

  return (
    <div className="container">
      <img className="ep-logo" src={epLogo} alt="Effortless Presence"/>
      <div className="welcome">
        <h1 className="welcome-text">Welcome Back!</h1>
      </div>
      <div className="login">
        <h1 className="login-text">Login</h1>
        <button className="button" onClick={() => {setLoginSelectionOpen(true);}}>Select Role</button>
      {LoginSelectionOpen && <LoginSelection setOpenCreateLesson={setLoginSelectionOpen} />}
      </div>
    </div>
  )
}

export default Login;