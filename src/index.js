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
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path={"/"} element={<App />}>
        <Route path="/landingPage/project1" element={<Project1 />} />
        <Route path="/landingPage/project2" element={<Project2 />} />
        <Route path="/landingPage/project3" element={<Project3 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/landingPage" element={<LandingPage />}>
          {/* <Route index="/landingPage/project1" element={<Project1 />} /> */}
        </Route>
        <Route path="/information" element={<Information />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
