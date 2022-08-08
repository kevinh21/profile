import React from "react";
import Iframe from "react-iframe";
import "./About.css";

const About = () => {
  return (
    <>
      <div id="aboutLinks">
        <a href="http://linkedin.com/in/kevin-h-b4230611/"> LinkedIn</a>
        <span> - </span>
        <a href="https://github.com/kevinh21/">GitHub</a>
      </div>

      <div className="resume-container">
        <Iframe
          src={process.env.PUBLIC_URL + "/images/Resume.pdf"}
          id="resumeIframe"
          className="aboutIframe"
          width="700px"
        />
        <br />
      </div>
    </>
  );
};

export default About;
