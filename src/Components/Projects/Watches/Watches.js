import React from "react";
import "../../LandingPage/LandingPage";
import "./Watches.css";
import Projects from "../Projects";

const Watches = () => {
  return (
    <div className="landingPageGrid">
      <div>
        <a href="http://kevinharger.com/watches">
          <img
            className="landingPreviewPic"
            alt="Watches"
            src={process.env.PUBLIC_URL + "/images/watches.jpg"}
          ></img>
        </a>

        <div className="description">
          <h4> PROJECT DESCRIPTION</h4>
          This project was created from a design by a UX/UI designer. He was a
          member of a team that desired experience working with actual
          developers. The goal was to aquire a real world experience interfacing
          with other professionals. We were paired to create a basic static
          site. Visual appeal was the emphasis of the design.
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

export default Watches;
