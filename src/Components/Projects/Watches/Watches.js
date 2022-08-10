import React from "react";
import "./Watches.css";
import Projects from "../Projects";
import "../../LandingPage/LandingPage";

const Watches = () => {
  return (
    <div className="landingPageFlex">
      <div>
        <a href="http://kevinharger.com/watches">
          <img
            className="landingPreviewPic"
            alt="Watches"
            src={process.env.PUBLIC_URL + "/images/watches.jpg"}
          ></img>
        </a>

        <div id="description">
          <h4> PROJECT DESCRIPTION</h4>
          This project was created from a design by a UX/UI designer. He was a
          member of a team that desired experience working with actual
          developers. The goal was to aquire a real world experience interfacing
          with other professionals. We were paired to create a basic static
          site. Visual appeal was the emphasis of the design.
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

export default Watches;
