import {useEffect, useState} from "react";

import Login from "./components/Login/Login";
import firebase from "./services/firebase";
import "./App.css";
import Dashboard from "./components/Dashboards/Dashboard/Dashboard";
import axios from 'axios';
import DashboardInstructor from "./components/Dashboards/Dashboard/DashboardInstructor";

function App() {
  function appContext(loggedInUser) {
    if (loggedInUser) {
      if (window.userType === 1) {
        return <Dashboard user={user} />
      } else {
        return <DashboardInstructor user={user} />
      }
    } else {
     return <Login />
    }
  }
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);

        axios.post('http://34.221.185.65:5000/admin/setUser', {
          firebaseId: user.uid,
          name: user.displayName,
          userType: window.userType
        }).then(response => {
          console.log("SUCCESS", response)
        }).catch(error => {
          console.log(error)
        })
      }
    })
  }, [])

  console.log(user);
  window.user = user;

  return (
    <div className="app">
      {appContext(user)}
      {/*{user ? <Dashboard user={user}/> : <Login/>}*/}
    </div>
  );
}

export default App;
