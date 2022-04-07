import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <Link>
        <img
          className="displayProject"
          src="..//images/ashtonMartinLagonda.jpg"
          alt="Aston Martin"
        />
      </Link>
    </div>
  );
};

export default Projects;
