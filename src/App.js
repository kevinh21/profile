import React from "react";
// import routes from "./Components/routes/routes";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Nav from "./Components/Utilities/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
