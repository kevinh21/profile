import React from "react";
import "../../LandingPage/LandingPage.css";
import "./MagicEight.css";
import Projects from "../Projects";

const Project2 = () => {
  return (
    <div className="landingPageGrid">
      <div>
        <a href="https://kevinh21.github.io/magic8ball/">
          <img
            className="landingPreviewPic"
            alt="Magic8 Ball"
            src={process.env.PUBLIC_URL + "/images/eightBall.png"}
          ></img>
        </a>
        <div className="description">
          DESCRIPTION OF PROJECT: As part of a Bitwise JavaScript boot camp, I
          was given a project that required me to create a Magic 8 Ball game.
          This was created with JavaScript, CSS and some HTML. It was the final
          project for the camp.
        </div>
      </div>
      <div className="rightColumn">
        <div id="professional">
          <h2 id="titles"> Professional </h2>
          Dependable
          <br /> Team Player <br />
          Excellent soft skills <br /> Full Stack Developer
          <div id="personal">
            <h2 id="titles"> Personal </h2>
            Father <br /> Charitable <br /> Well traveled
            <br />
            Kayak Fishing
            <div id="techUsed">
              <h2 id="titles">Technology Used:</h2>
              <ul id="techUsedParagraph">
                React, JavaScript, CSS, HTML
                <br />
                Node, Express, Mongo, PostgreSql
                <br />
                Visual Studio Code, GitHub, Heroku
                <br />
                Gimp, Photoshop, Illistruator, Figma
                <br />
                Notepad++, PHPRunner, CRM, Excel
                <br />
              </ul>
            </div>
          </div>
        </div>
        <div id="projectsMenu">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Project2;
