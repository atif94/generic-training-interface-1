import "./sw.css";
import MainNavbar from "../../Navbars/MainNavbar/MainNavbar";
import React from "react";
import "./softwareEngineering.css";
import * as IoIcons from "react-icons/io";

const Video = () => {
  return (
    <section>
      <div class="float-container">
        <MainNavbar />
        <div className="jack">
          <h1 className="heading">Software Engineering</h1>
          <div class="float-child">
            <div class="green">
              <iframe
                width="100%"
                height="800px"
                src="https://www.youtube.com/embed/vdLD-C0EBIE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <div>
            <div>
              <h2>Software Engineering- Lecture 1</h2>
              <h2>Introduction to scrum</h2>
            </div>
            <div>
              <p>Uploaded on 14th April,2022</p>
            </div>
            <p className="para">
              This would be an introductory class for beginners to the product
              management topic and the agile software environmentn general.
            </p>
            <div className="videoIcons">
              <IoIcons.IoIosRewind />
              &nbsp;&nbsp;
              <IoIcons.IoIosFastforward />
              &nbsp;&nbsp;
              <IoIcons.IoIosArrowRoundBack />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
