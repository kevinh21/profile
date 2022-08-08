import React from "react";
import Projects from "../Projects";
import "./WebSitesForBeginners.css";
import "../../LandingPage/LandingPage.css";

const WebSitesForBeginners = () => {
  return (
    <div className="landingPageGrid">
      <div className="topRow">
        <a href="https://kevinh21.github.io/websitesforbeginners/">
          <img
            id="wsforbeginPreviewPic"
            alt="Cyber Security"
            src={process.env.PUBLIC_URL + "/images/ws4b.jpg"}
          ></img>
        </a>
        <div className="description">
          <h4> PROJECT DESCRIPTION</h4>
          This was the first project I created from scratch without using any
          frameworks. It is pure HTML and CSS.
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

export default WebSitesForBeginners;
