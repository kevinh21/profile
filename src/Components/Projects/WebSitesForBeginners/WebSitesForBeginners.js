import React from "react";
import Projects from "../Projects";
import "./WebSitesForBeginners.css";
import "../../LandingPage/LandingPage.css";

const WebSitesForBeginners = () => {
  return (
    <div className="landingPageFlex">
      <div>
        <a href="https://kevinh21.github.io/websitesforbeginners/">
          <img
            id="wsforbeginPreviewPic"
            alt="Cyber Security"
            src={process.env.PUBLIC_URL + "/images/ws4b.jpg"}
          ></img>
        </a>
        <div id="description">
          <h4> PROJECT DESCRIPTION</h4>
          This was the first project I created from scratch without using any
          frameworks. It is pure HTML and CSS.
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

        <div id="comingSoonHorse">
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

export default WebSitesForBeginners;
