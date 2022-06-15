import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="projectLink">
      <div className="leftSidePage">
        <a href="https://www.sensipass.com/">
          <img
            className="landingPreview"
            alt="Louvre Interior"
            src={process.env.PUBLIC_URL + "/images/louvreInside.jpg"}
          ></img>
        </a>
        <div className="description">
          DESCRIPTION OF PROJECT Situation: Describe the situation that you were
          in or the task that you needed to accomplish. You must describe a
          specific event or situation, not a generalized description of what you
          have done in the past. Be sure to give enough detail for the
        </div>
      </div>
      {/* ///////////////////////////////////////////////
      ///////////////////////////////////////////////
      /////////////////////////////////////////////// */}
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
          Lorem,ipsum dolor sit amet consectetur adipisicing elit Dolor corrupti
          officia recusandae iure saepe quam sit? Laboriosam in quos maiores,
          inventore deserunt eum ut recusandae nostrum autem error ratione
          numquam similique esse beatae consequatur cupiditate delectus sapiente
          mollitia odit hic dicta a. Veritatis maiores facilis, soluta similique
          saepe iste impedit!
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
