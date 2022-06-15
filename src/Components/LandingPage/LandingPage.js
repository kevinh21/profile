import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="projectLink">
      <div className="leftSidePage">
        <a href="https://www.sensipass.com/">
          <img
            className="landingPreview"
            alt="Louvre Interior"
            src={process.env.PUBLIC_URL + "/images/louvreInside.jpg"}
          ></img>
        </a>
        <div className="description">
          <h4> PROJECT DESCRIPTION</h4> The projects contained in this portflio
          are a compilation of projects from the time I became a professional
          developer. I've worked with various development environments and
          frameworks
        </div>
      </div>
      {/* ///////////////////////////////////////////////
      ///////////////////////////////////////////////
      /////////////////////////////////////////////// */}
      <div className="rightSidePage">
        <div id="professional">
          <h2 id="pTitle"> Professional </h2>
          Dependable
          <br /> Team Player <br />
          Excellent soft skills <br /> Full Stack Developer
        </div>
        <div id="personal">
          <h2 id="pTitle"> Personal </h2>
          Father <br /> Charitable <br /> Well traveled
          <br />
          Kayak Fishing
        </div>

        <div id="techUsed">TECHNOLOGY USED: </div>
        <div />
        <ul id="techParagraph">
          <li>- React, JavaScript, CSS, HTML</li>
          <li>- Gimp, Photoshop, Illistruator, Figma</li>
          <li>- Node, Express, Mongo, PostgreSql</li>
          <li>- Visual Studio Code, GitHub, Heroku</li>
          <li>- Notepad++, PHPRunner, Excel</li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
