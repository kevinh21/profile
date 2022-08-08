import { React } from "react";
import Projects from "../Projects/Projects";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingPageGrid">
      <div>
        <a href="https://www.louvre.fr/en/">
          <img
            className="landingPreviewPic"
            alt="Louvre Interior"
            src={process.env.PUBLIC_URL + "/images/louvreInside.jpg"}
          ></img>
        </a>
        <div className="description">
          <h4> PROJECT DESCRIPTION</h4> The projects contained in this portflio
          are a compilation of projects from the time I became a professional
          developer. I've worked with various development environments and
          frameworks.
        </div>
      </div>
      <div className="rightColumn">
        <div id="professional">
          <h2 id="titles"> Professional </h2>
          Dependable
          <br /> Team Player <br />
          Excellent soft skills <br /> Full Stack Developer
          <div id="personal">
            <h2 id="titles"> Personal </h2>
            Father <br /> Charitable <br /> Well traveled
            <br />
            Kayak Fishing
            <div id="techUsed">
              <h2 id="titles">Technology Used:</h2>
              <ul id="techUsedParagraph">
                React, JavaScript, CSS, HTML
                <br />
                Node, Express, Mongo, PostgreSql
                <br />
                Visual Studio Code, GitHub, Heroku
                <br />
                Gimp, Photoshop, Illistruator, Figma
                <br />
                Notepad++, PHPRunner, CRM, Excel
                <br />
              </ul>
            </div>
          </div>
        </div>
        <div id="projectsMenu">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
