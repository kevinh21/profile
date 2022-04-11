import React from "react";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import "./Project1.css";

function Project1() {
  return (
    <div className="projectWrapper">
      <div className="projectFrame">
        <Iframe
          url="https://kevinh21.github.io/magic8ball/"
          id="eightBall"
          // height="400px"
          // width="600px"
          className="projectIframe"
        />
      </div>
      <div className="projectDescription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti
        officia recusandae iure saepe quam sit? Laboriosam in quos maiores,
        inventore deserunt eum ut recusandae nostrum autem error ratione numquam
        similique esse beatae consequatur cupiditate delectus sapiente mollitia
        odit hic dicta a. Veritatis maiores facilis, soluta similique saepe iste
        impedit!
      </div>
    </div>
  );
}

export default Project1;
