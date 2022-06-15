import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css";

const Projects = () => {
  return (
    <div>
      <ul className="projectList">
        <li id="webSitesForBeginners">
          <Link to="/webSitesForBeginners"> HTML - Security </Link>
        </li>
        <li id="magicEight">
          <Link to="/magicEight"> JS - Magic 8 Ball </Link>
        </li>
        <li id="watches">
          <Link to="/watches"> Collaboration - Watches </Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
