import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMobileNav } from "../store/mobileNav";
import { useDispatch } from "react-redux";

function Options() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setMobileNav(false));
  };
  const mobileNav = useSelector((state) => state.mobileNav);
  const language = useSelector((state) => state.language);

  return (
    <motion.div
      animate={{
        left: !mobileNav ? -190 : 0,
      }}
      style={{
        flexDirection: "column",
        display: "flex",
        position: "absolute",
        marginTop: "-100%",
        scale: "0.7",
      }}
    >
      <Link to="/">
        <div
          onClick={handleClick}
          style={{
            color: "black",
            backgroundColor: "white",
            height: "3rem",
            padding: "0rem 1.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2rem",
            marginTop: "1.7rem",
            border: "0.3rem solid #19bc8b",
          }}
        >
          <h2>{language.language === "ENGLISH" ? "HOME" : "INICIO"}</h2>
        </div>
      </Link>
      <Link to="/aboutme">
        <div
          onClick={handleClick}
          style={{
            color: "black",
            backgroundColor: "white",
            height: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2rem",
            marginTop: "1.7rem",
            padding: "0rem 1.8rem",
            border: "0.3rem solid #19bc8b",
          }}
        >
          <h2>{language.language === "ENGLISH" ? "ABOUT ME" : "SOBRE MÍ"}</h2>
        </div>
      </Link>

      <Link to="/projects">
        <div
          onClick={handleClick}
          style={{
            color: "black",
            backgroundColor: "white",
            height: "3rem",
            padding: "0rem 1.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2rem",
            marginTop: "1.7rem",
            border: "0.3rem solid #19bc8b",
          }}
        >
          <h2>{language.language === "ENGLISH" ? "PROJECTS" : "PROJECTOS"}</h2>
        </div>
      </Link>

      <Link to="/contact">
        <div
          onClick={handleClick}
          style={{
            color: "black",
            backgroundColor: "white",
            height: "3rem",
            padding: "0rem 1.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2rem",
            marginTop: "1.7rem",
            border: "0.3rem solid #19bc8b",
          }}
        >
          <h2>{language.language === "ENGLISH" ? "CONTACT" : "CONTACTO"}</h2>
        </div>
      </Link>
    </motion.div>
  );
}

export default Options;
