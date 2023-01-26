import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import TheMovieBank from "../projects pics/TheMovieBank.png";
import BrokenOffice from "../projects pics/BrokenOffice.png";
import Divino from "../projects pics/Divino.PNG";
import { Link } from "react-router-dom";

function Projects() {
  const fiveHundredPx = useMediaQuery("(max-width:550px)");
  const fourHundredPx = useMediaQuery("(max-width:412px)");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        // delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Grid container>
        <Grid
          item
          sx={{ justifyContent: "center", display: "flex" }}
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <Link to="/projects/theMovieBank">
            <div
              className="glow-on-hover"
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "5rem",
                alignItems: "end",
                height:
                  fiveHundredPx === true && fourHundredPx === false
                    ? "12rem"
                    : fourHundredPx
                    ? "10rem"
                    : "15rem",
                width:
                  fiveHundredPx === true && fourHundredPx === false
                    ? "24rem"
                    : fourHundredPx
                    ? "20rem"
                    : "30rem",
                backgroundColor: "white",
                borderRadius: "1rem",
              }}
            >
              <img
                src={TheMovieBank}
                style={{
                  borderRadius: "1rem",

                  height:
                    fiveHundredPx === true && fourHundredPx === false
                      ? "12rem"
                      : fourHundredPx
                      ? "10rem"
                      : "15rem",
                  width:
                    fiveHundredPx === true && fourHundredPx === false
                      ? "24rem"
                      : fourHundredPx
                      ? "20rem"
                      : "30rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
        </Grid>

        <Grid
          item
          sx={{ justifyContent: "center", display: "flex" }}
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <Link to="/projects/brokenOffice">
            <div
              className="glow-on-hover"
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "5rem",
                alignItems: "end",
                height:
                  fiveHundredPx === true && fourHundredPx === false
                    ? "12rem"
                    : fourHundredPx
                    ? "10rem"
                    : "15rem",
                width:
                  fiveHundredPx === true && fourHundredPx === false
                    ? "24rem"
                    : fourHundredPx
                    ? "20rem"
                    : "30rem",
                backgroundColor: "white",
                borderRadius: "1rem",
              }}
            >
              <img
                src={BrokenOffice}
                style={{
                  borderRadius: "1rem",

                  height:
                    fiveHundredPx === true && fourHundredPx === false
                      ? "12rem"
                      : fourHundredPx
                      ? "10rem"
                      : "15rem",
                  width:
                    fiveHundredPx === true && fourHundredPx === false
                      ? "24rem"
                      : fourHundredPx
                      ? "20rem"
                      : "30rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
        </Grid>

        <Grid
          item
          sx={{ justifyContent: "center", display: "flex" }}
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <Link to="/projects/divino">
            <div
              className="glow-on-hover"
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "5rem",
                alignItems: "end",
                height:
                  fiveHundredPx === true && fourHundredPx === false
                    ? "12rem"
                    : fourHundredPx
                    ? "10rem"
                    : "15rem",
                width:
                  fiveHundredPx === true && fourHundredPx === false
                    ? "24rem"
                    : fourHundredPx
                    ? "20rem"
                    : "30rem",
                backgroundColor: "white",
                borderRadius: "1rem",
              }}
            >
              <img
                src={Divino}
                style={{
                  borderRadius: "1rem",

                  height:
                    fiveHundredPx === true && fourHundredPx === false
                      ? "12rem"
                      : fourHundredPx
                      ? "10rem"
                      : "15rem",
                  width:
                    fiveHundredPx === true && fourHundredPx === false
                      ? "24rem"
                      : fourHundredPx
                      ? "20rem"
                      : "30rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </Link>
        </Grid>
      </Grid>
      <div style={{ height: "2rem" }}></div>
    </motion.div>
  );
}

export default Projects;
