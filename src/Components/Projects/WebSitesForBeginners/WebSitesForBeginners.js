import React from "react";
import "../../LandingPage/LandingPage.css";

const WebSitesForBeginners = () => {
  return (
    <div className="projectLink">
      <div className="leftSidePage">
        <a href="https://kevinh21.github.io/websitesforbeginners/">
          <img
            className="landingPreview"
            alt="Louvre Interior"
            src={process.env.PUBLIC_URL + "/images/ws4b.jpg"}
          ></img>
        </a>
        <div className="description">
          <h4> PROJECT DESCRIPTION</h4>
          This was the first project I created from scratch without using any
          frameworks. It is pure HTML and CSS.
        </div>
      </div>
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
        <div id="techParagraph">
          HTML - CSS - GitHub
          <br />
          Visual Studion Code
          <br />
        </div>
      </div>
    </div>
  );
};

export default WebSitesForBeginners;
