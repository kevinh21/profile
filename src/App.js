import React from "react";
// import routes from "./Components/routes/routes";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Nav from "./Components/Utilities/Nav";
// import { } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <ul className="projectList">
        <li id="project1">
          <Link to="/project1"> HTML - Security </Link>
        </li>
        <li id="project2">
          <Link to="/project2"> JS - Magic 8 Ball </Link>
        </li>
        <li id="project3">
          <Link to="/project3"> Collaboration - Watches </Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
