import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from "./App";
import WebSitesForBeginners from "./Components/Projects/WebSitesForBeginners/WebSitesForBeginners";
import MagicEight from "./Components/Projects/MagicEight/MagicEight";
import Watches from "./Components/Projects/Watches/Watches";
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
        <Route
          path="/webSitesForBeginners"
          element={<WebSitesForBeginners />}
        />
        <Route path="/magicEight" element={<MagicEight />} />
        <Route path="/watches" element={<Watches />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);
