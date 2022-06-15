import React from "react";
import "../../LandingPage/LandingPage";

const Watches = () => {
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
          This project was created from a design given to me by a UX/UI
          designer. He was on a team that desired experience workingn with
          actual developers. The goal was to aquire a real world experience
          interfacing with other professionals. We were paired to create a basic
          static site. Visual appeal was the emphasis of the design.
        </div>
      </div>
      <div className="rightSidePage">
        <div id="professional">
          <h2 id="pTitle"> Professional </h2>
          Dependable
          <li /> Team Player <li />
          Excellent soft skills <li /> Full Stack Developer
        </div>
        <div id="personal">
          <h2 id="pTitle"> Personal </h2>
          Father <li /> Charitable <li /> Well traveled
          <li />
          Kayak Fishing
        </div>

        <div id="techUsed">TECHNOLOGY USED: </div>
        <div />
        <div id="techParagraph">
          React - HTML - CSS <li />
          GitHub - Figma - Gimp
          <li /> Visual Studio Code
        </div>
      </div>
    </div>
  );
};

export default Watches;
