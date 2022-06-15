import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import Project1 from "./Components/Project1/Project1";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";
import Projects from "./Components/Projects/Projects";
import LandingPage from "./Components/LandingPage/LandingPage";
import Information from "./Components/Information/Information";
import About from "./Components/About/About";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route exact path={"/"} element={<App />}>
        <Route index="/landingPage" element={<LandingPage />}></Route>
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);
