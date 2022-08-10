import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="information">
      <div id="professional">
        <h2 id="titles"> Professional </h2>
        <ul>
          <li>
            Dependable - Bring projects in on time which in turn keeps the
            budget on track
          </li>
          <li>
            Team Player - Proven experience working with a wide variety of staff
            and executives
          </li>
          <li>
            Excellent soft skills - Receives critisizem well, works to help
            others as needed
          </li>
          <li>
            Full Stack Developer - Has trained and worked with various frontend
            and backend applications and languages
          </li>
          <div id="personal">
            <h2 id="titles"> Personal </h2>
            <li>Father - Two sons </li>
            <li>
              Charitable - Mason 32degree, various volunteer work, charitable
              donations
            </li>
            <li>
              Well traveled - Europe, Central America, Caribbean, 48 States
            </li>
            <li> Kayak Fishing - Ocean waters</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Information;
