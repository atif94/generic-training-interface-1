import MainNavbar from "../../Navbars/MainNavbar/MainNavbar";
import "./QuadScene.css";
import * as IoIcons from "react-icons/io";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";

const QuadScene = () => {
  return (
    <section>
      <MainNavbar />
      <div id="div1" className="alignment">
      <iframe
        width="100%"
        height="550px"
        src="https://www.youtube.com/embed/vdLD-C0EBIE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen />
        {/*<button className="basicButton">Upload Video</button>*/}
      </div>
      <div id="div2" className="alignment">
        <div className="textPart-student">
            <h2 className="section-title">Intro to Project Management</h2>
            <p>
                Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process. The primary constraints are scope, time, and budget. The secondary challenge is to optimize the allocation of necessary inputs and apply them to meet pre-defined objectives.
            </p>
            <p>
                The objective of project management is to produce a complete project which complies with the client's objectives. In many cases the objective of project management is also to shape or reform the client's brief to feasibly address the client's objectives. Once the client's objectives are clearly established they should influence all decisions made by other people involved in the project – for example project managers, designers, contractors and sub-contractors. Ill-defined or too tightly prescribed project management objectives are detrimental to decision making.
            </p>
            <p>
                A project is a temporary and unique endeavor designed to produce a product, service, or result with a defined beginning and end (usually time-constrained, and often constrained by funding or staffing) undertaken to meet unique goals and objectives, typically to bring about beneficial change or added value. The temporary nature of projects stands in contrast with business as usual (or operations), which are repetitive, permanent, or semi-permanent functional activities to produce products or services. In practice, the management of such distinct production approaches requires the development of distinct technical skills and management strategies.
            </p>
        </div>
      </div>
      <div id="div3" className="alignment">

          <div className="float-child">
              <div className="blue">
                  <p>What is project management?</p>
                  <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                  /> <label htmlFor="html">The management of projects</label>
                  <br/>
                  <input
                      type="radio"
                      id="css"
                      name="fav_language"
                      value="CSS"
                  /> <label htmlFor="css">Architecting software systems</label>
                  <br/> {" "}
                  <input
                      type="radio"
                      id="javascript"
                      name="fav_language"
                      value="JavaScript"
                  />
                  &nbsp;
                  <label htmlFor="javascript">Real analysis</label>
                  <br/>
                  <br/>
                  <p>What is the best tool for project management?</p>
                  <input type="radio" id="age1" name="age" value="30"/>
                  &nbsp;
                  <label htmlFor="age1">Trello</label>
                  <br/>
                  <input type="radio" id="age2" name="age" value="60"/>
                  &nbsp;
                  <label htmlFor="age2">JIRA</label>
                  <br/>
                  <input type="radio" id="age3" name="age" value="100"/>
                  &nbsp;
                  <label htmlFor="age3">Plaintext files</label>
                  <br/>
                  <br/>
                  <Link to="/">
                      <Button variant="primary" style={{backgroundColor: "#D34994", borderColor: "#D34994"}}>Submit</Button>{' '}
                  </Link>
              </div>
          </div>
      </div>
      <div id="div4" className="alignment">
        <button className="basicButton">Start Puzzle</button>
        <div className="quizIcons">
          <IoIcons.IoIosRewind />
          &nbsp;&nbsp;
          <IoIcons.IoIosFastforward />
          &nbsp;&nbsp;
          <IoIcons.IoIosArrowRoundBack />
        </div>
      </div>
    </section>
  );
};

export default QuadScene;
