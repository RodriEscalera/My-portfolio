import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import TheMovieBank from "../projects pics/TheMovieBank.png";
import BrokenOffice from "../projects pics/BrokenOffice.png";
import Divino from "../projects pics/Divino.PNG";

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
          <a
            href="https://github.com/Rodriix99/THE-MOVIE-BANK-FRONT"
            target="_blank"
          >
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
          </a>
        </Grid>

        <Grid
          item
          sx={{ justifyContent: "center", display: "flex" }}
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <a
            href="https://github.com/Rodriix99/BrokenOffice-Front"
            target="_blank"
          >
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
          </a>
        </Grid>

        <Grid
          item
          sx={{ justifyContent: "center", display: "flex" }}
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <a href="https://github.com/Rodriix99/E-COMMERCE2" target="_blank">
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
          </a>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Projects;
