import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <ul className="projectList">
        <div id="projectsTitle">
          <h3>PROJECTS</h3>
        </div>
        <li id="webSitesForBeginners">
          <Link to="/webSitesForBeginners"> HTML - Security </Link>
        </li>
        <li id="magicEight">
          <Link to="/magicEight"> JS - Magic 8 Ball </Link>
        </li>

        <li id="watches">
          <Link to="/watches"> Case Study - Watches </Link>
        </li>
        <li id="pricingComponents">
          <a href="http://kevinharger.com/pricingcomponent/">
            CSS - Pricing Components
          </a>
        </li>
        <li id="sensipass">
          <a href="http://kevinharger.com/sensipass">React - Sensipass</a>
        </li>
        <li id="SecureCannabisAlliance">
          <a href="http://SecureCannabisAlliance.com">
            WordPress - Secure Cannabis Alliance
          </a>
        </li>
        <li id="securityrfps">
          <a href="http://securityrfps.com">
            In Developement WordPress- Security RFPs
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
