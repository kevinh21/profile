import React from "react";
import "../../LandingPage/LandingPage.css";
import "./MagicEight.css";
import Projects from "../Projects";

const Project2 = () => {
  return (
    <div className="landingPageFlex">
      <div>
        <a href="https://kevinh21.github.io/magic8ball/">
          <img
            className="landingPreviewPic"
            alt="Magic8 Ball"
            src={process.env.PUBLIC_URL + "/images/eightBall.png"}
          ></img>
        </a>
        <div id="description">
          DESCRIPTION OF PROJECT: As part of a Bitwise JavaScript boot camp, I
          was given a project that required me to create a Magic 8 Ball game.
          This was created with JavaScript, CSS and some HTML. It was the final
          project for the camp.
        </div>
        <div id="techUsedTitle">
          <h4>Technology Used: </h4>
          React, JavaScript, CSS, HTML, Node, Express, Mongo, PostgreSql, Visual
          Studio Code, GitHub, Heroku, Gimp, Photoshop, Illistruator, Figma,
          Notepad++, PHPRunner, CRM, Excel
          <br />
        </div>
      </div>
      <div className="projectsTechColumn">
        <div id="projectsMenu">
          <Projects />
        </div>

        <div id="comingSoon">
          <p /> COMMING SOON
          <video id="video" autoPlay muted>
            <source
              src={process.env.PUBLIC_URL + "/images/raceVideo.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Project2;
