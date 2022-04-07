import React from "react";
import Iframe from "react-iframe";
import "./About.css";

const About = () => {
  return (
    <div className="resume-container">
      <Iframe
        src={process.env.PUBLIC_URL + "/images/Resume.pdf"}
        id="resumeIframe"
        className="aboutIframe"
      />
      <br />
    </div>
  );
};

export default About;
