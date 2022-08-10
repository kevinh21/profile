import { React } from "react";
import Projects from "../Projects/Projects";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPageFlex">
      <div>
        <a href="http://bidsite.net">
          <img
            className="landingPreviewPic"
            alt="BidSite"
            src={process.env.PUBLIC_URL + "/images/bidsite.jpg"}
          ></img>
        </a>
        <div id="description">
          <h4> PROJECT DESCRIPTION</h4> The projects contained in this portflio
          are a compilation of projects from the time I became a professional
          developer. I've worked with various development environments and
          frameworks.
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
          COMMING SOON
          <div />
          <div>
            <video id="video" autoPlay muted>
              <source
                src={process.env.PUBLIC_URL + "/images/raceVideo.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

// https://securecannabisalliance.com/
