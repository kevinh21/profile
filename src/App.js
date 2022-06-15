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

export default App;
