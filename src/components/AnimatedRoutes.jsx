import React from "react";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import TheMovieBank from "../projects/TheMovieBank";
import Divino from "../projects/Divino";
import BrokenOffice from "../projects/BrokenOffice";
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/theMovieBank" element={<TheMovieBank />} />
        <Route path="/projects/divino" element={<Divino />} />
        <Route path="/projects/brokenOffice" element={<BrokenOffice />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
