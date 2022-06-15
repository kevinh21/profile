import React from "react";
import "../LandingPage/LandingPage.css";

const Project3 = () => {
  return (
    <div className="projectLink">
      <div className="leftSidePage">
        <a href="https://watches4-29.herokuapp.com/">
          <img
            className="landingPreview"
            alt="Magic8 Ball"
            src={process.env.PUBLIC_URL + "/images/watches.jpg"}
          ></img>
        </a>
        <div className="description">
          <h4> PROJECT DESCRIPTION</h4>
          Situation: This project was created in a collaboration with a UX/UI
          developer. Their team needed experience workingn with developers and
          we wanted live projects. Both teams were paired with partners to
          design a static product. The was to be only basic functionality in the
          design. The visual design was emphasized. I focused on duplicating the
          design to the pixel. There was minial if any visual difference from
          the design to the finished product.
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
        <div>
          <ul id="techParagraph">
            <li>Figma</li>
            <li>Gimp</li>
            <li>React</li>
            <li>CSS</li>
            <li>Visual Studio Code</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project3;
