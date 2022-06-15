import React from "react";
// import routes from "./Components/routes/routes";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Nav from "./Components/Utilities/Nav";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Projects />
    </div>
  );
};

export default App;
