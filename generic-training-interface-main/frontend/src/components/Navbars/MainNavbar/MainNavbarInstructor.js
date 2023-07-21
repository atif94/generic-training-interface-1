import React, { Component } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainNavbar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseEntry from "../../CourseEntry/CourseEntry";
import DualScene from "../../SceneBuilder/DualScene/DualScene";
import SidebarInstructor from "../SideBar/SidebarInstructor";
import VideoScene from "../../SceneBuilder/VideoScene/VideoScene";
import QuadScene from "../../SceneBuilder/QuadScene/QuadScene";
import Enrolled from "../../Dashboards/Enrolled/Enrolled";
import Gradebook from "../../Gradebook/Gradebook";
import EP from "../../../EP.png";

class MainNavbarInstructor extends Component {
  render() {
    return (
      <Navbar className="top-nav" bg="dark" variant="dark" style={{ minWidth: 700}}>
        <SidebarInstructor />
        <Routes>
          <Route path="/enrolled" element={<Enrolled />} />
          <Route path="/inprocess" element={<QuadScene />} />
          <Route path="/completed" element={<DualScene />} />
          <Route path="/gradebook" element={<Gradebook />} />
        </Routes>
        <Navbar.Brand className="brand" href="/">
        <img className="EP" src={EP} alt={"EP"} />
        </Navbar.Brand>
        
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-4" />
        </Form>
        <Button variant="outline-info">Search</Button>
      </Navbar>
    );
  }
}

export default () => (
  <div>
    <MainNavbarInstructor />
  </div>
);
