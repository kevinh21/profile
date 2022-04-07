import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./LandingPage.css";

/* TODO */
/* Need to import components to display text */
/* Need to import discription sections also */
/* Need to link real projects into iframe and put projects menu on project pages */

const LandingPage = () => {
  return (
    <div className="outteWrapper">
      <div className="landingWrapper">
        <Outlet />
        <img
          className="landingPreview"
          alt="Louvre Interior"
          src={process.env.PUBLIC_URL + "/images/louvreInside.jpg"}
        ></img>
        <div className="description">
          DESCRIPTION OF PROJECT Situation: Describe the situation that you were
          in or the task that you needed to accomplish. You must describe a
          specific event or situation, not a generalized description of what you
          have done in the past. Be sure to give enough detail for the
          interviewer to understand. This situation can be from a previous job,
          from a volunteer experience, or any relevant event. Task: What goal
          were you working toward? Action: Describe the actions you took to
          address the situation with an appropriate amount of detail and keep
          the focus on YOU. What specific steps did you take and what was your
          particular contribution? Be careful that you don’t describe what the
          team or group did when talking about a project, but what you actually
          did. Use the word “I,” not “we” when describing actions. Result:
          Describe the outcome of your actions and don’t be shy about taking
          credit for your behavior. What happened? How did the event end? What
          did you accomplish? What did you learn? Make sure your answer contains
          multiple positive results.
        </div>
      </div>

      <div className="tech">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor corrupti
        officia recusandae iure saepe quam sit? Laboriosam in quos maiores,
        inventore deserunt eum ut recusandae nostrum autem error ratione numquam
        similique esse beatae consequatur cupiditate delectus sapiente mollitia
        odit hic dicta a. Veritatis maiores facilis, soluta similique saepe iste
        impedit!
      </div>
      <ul className="projectList">
        <li className="project1">
          <Link to="/landingPage/project1"> Project1 </Link>
        </li>
        <li className="project2">
          <Link to="/landingPage/project2"> Project2 </Link>
        </li>
        <li className="project3">
          <Link to="/landingPage/project3"> Project3 </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
