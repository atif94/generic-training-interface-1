import "./VideoScene.css";
import MainNavbar from "../../Navbars/MainNavbar/MainNavbar";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import React from "react";

const VideoScene = () => {

  function alertpop() {
    alert("Quiz Successfully Submitted");
    // close();
  }

  return (
    <div class="float-container">
      <MainNavbar />
      <div class="float-child">
        <div class="green">
          <iframe
            width="100%"
            height="1000px"
            src="https://www.youtube.com/embed/vdLD-C0EBIE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="float-child">
        <div class="blue">
          <p>Please select your favorite Web language:</p>
            <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />  <label for="html">HTML</label>
          <br />
            <input
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
          />  <label for="css">CSS</label>
          <br /> {" "}
          <input
            type="radio"
            id="javascript"
            name="fav_language"
            value="JavaScript"
          />
            <label for="javascript">JavaScript</label>
          <br />
          <br />
          <p>Please select your age:</p>
          <input type="radio" id="age1" name="age" value="30" />
          &nbsp;&nbsp;
          <label for="age1">0 - 30</label>
          <br />
          <input type="radio" id="age2" name="age" value="60" />
          &nbsp;&nbsp;
          <label for="age2">31 - 60</label>
          <br />
          <input type="radio" id="age3" name="age" value="100" />
          &nbsp;&nbsp;
          <label for="age3">61 - 100</label>
          <br></br>
          <br></br>
          <p>Please select your favorite Web language:</p>
            <input
            type="radio"
            id="html1"
            name="fav_language"
            value="HTML"
          />  <label for="html1">HTML</label>
          <br />
            <input
            type="radio"
            id="css1"
            name="fav_language"
            value="CSS"
          />  <label for="css1">CSS</label>
          <br /> {" "}
          <input
            type="radio"
            id="javascript1"
            name="fav_language"
            value="JavaScript"
          />
            <label for="javascript1">JavaScript</label>
          <br />
          <br />
          <p>Please select your age:</p>
          <input type="radio" id="age11" name="age" value="30" />
          &nbsp;&nbsp;
          <label for="age11">0 - 30</label>
          <br />
          <input type="radio" id="age21" name="age" value="60" />
          &nbsp;&nbsp;
          <label for="age21">31 - 60</label>
          <br />
          <input type="radio" id="age31" name="age" value="100" />
          &nbsp;&nbsp;
          <label for="age31">61 - 100</label>
          <br />
          <br />
          <br />
          {/*<input type="submit" value="Submit" />*/}
          <Link to="/">
            <Button variant="primary" style={{backgroundColor:"#D34994", borderColor:"#D34994"}}
            onClick={alertpop}>Submit</Button>{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoScene;
