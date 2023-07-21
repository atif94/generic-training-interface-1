import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarDataInstructor } from "./SidebarDataInstructor";
import "./Navbar.css";
import { IconContext } from "react-icons";

function SidebarInstructor() {
  const [SidebarInstructor, setSidebarInstructor] = useState(false);

  const showSidebarInstructor = () => setSidebarInstructor(!SidebarInstructor);

  return (
    <>
      <IconContext.Provider value={{ color: "#fbfcfd", size: "20px" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebarInstructor} />
          </Link>
        </div>
        <nav className={SidebarInstructor ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebarInstructor}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarDataInstructor.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  
                </li>
                
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SidebarInstructor;
