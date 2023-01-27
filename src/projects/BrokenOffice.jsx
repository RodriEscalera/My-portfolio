import React from "react";
import { useState } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Grid } from "@mui/material";
import BrokenOfficePic from "../projects pics/BrokenOffice.png";
import "../styles/borderProjectDetail.scss";
import "../styles/textProjectAnimation.css";
import { useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import { motion } from "framer-motion";

function BrokenOffice() {
  const isActive = useMediaQuery("(max-width:650px)");
  const language = useSelector((state) => state.language);
  const [eventHover, setEventHover] = useState(false);
  const handleHover = () => {
    setEventHover(true);
  };
  const handleLeave = () => {
    setEventHover(false);
  };

  const iconStyle = {
    color: "white",
    width: !isActive ? "6rem" : "4rem",
    height: !isActive ? "6rem" : "4rem",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      scale: "1.1",
      color: "#19bc8b",
      transition: "0.3s",
      cursor: "pointer",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.25,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Grid container sx={{ marginTop: "2rem", textAlign: "center" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            className="textProject"
            variant="h3"
            sx={{ color: "white", marginTop: "2rem", textAlign: "center" }}
          >
            BROKEN OFFICE
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ justifyContent: "center", display: "flex", marginTop: "3rem" }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <div
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
            className="box"
            style={{
              width: !isActive ? "40.3rem" : "20.3rem",
              height: !isActive ? "20.3rem" : "10.3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {eventHover === true && (
              <div style={{ position: "absolute", zIndex: 1, width: "50%" }}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <a
                      href="https://github.com/Rodriix99/BrokenOffice-Front"
                      target="_blank"
                    >
                      <GitHubIcon sx={iconStyle} />
                    </a>
                  </Grid>
                </Grid>
              </div>
            )}
            <img
              className="imagen"
              src={BrokenOfficePic}
              style={{
                width: !isActive ? "40rem" : "20rem",
                height: !isActive ? "20rem" : "10rem",
                objectFit: "cover",
              }}
              alt="the movie bank"
            />
          </div>
        </Grid>

        <Grid
          item
          sx={{ display: "flex", justifyContent: "center" }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography
            variant="p"
            sx={{
              color: "white",
              textAlign: "center",
              width: !isActive ? "50%" : "80%",
              padding: "3rem",
            }}
          >
            {language.language === "ENGLISH"
              ? "Broken Office is a pwa designed to give support to globant employees, in case any item of the company suffers damage, the employee can take a picture and create a report, so that the nearest administrator receives it and can solve it. This web application has object recognition (machine learning) and geolocation when making a report."
              : "Broken Office es una pwa destinada a darle soporte a los empleados de globant, en caso de que algún item de la empresa sufra daños, el empleado puede tomarle una foto y crear un reporte, para que el administrador más cercano lo recibe y lo pueda resolver. Esta aplicación web cuenta con reconocimiento de objeto (machine learning) y con geolocalización a la hora de hacer un reporte."}
          </Typography>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            sx={{
              color: "white",
              padding: "2rem",
            }}
            variant="h3"
          >
            {language.language === "ENGLISH"
              ? "Technologies used:"
              : "Tecnologías usadas:"}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <img
            style={styleImg}
            src="https://i.im.ge/2023/01/26/svfMcC.css.png"
          />
          <img
            style={styleImg}
            src="https://i.im.ge/2023/01/26/svfdgT.React.png"
          />
          <img
            style={styleImg}
            src="https://i.im.ge/2023/01/26/svf7CG.redux.png"
          />
          <img
            style={styleImg}
            src="https://i.im.ge/2023/01/26/svfOVr.materialui.png"
          />
          <img
            style={styleImg}
            src="https://i.im.ge/2023/01/26/svfS00.psql.png"
          />
          <img
            style={styleImg}
            src="https://i.im.ge/2023/01/26/svfLSa.sequelize.png"
          />
          <img
            style={styleImg}
            src="https://i.im.ge/2023/01/26/svf2lW.nodejs.png"
          />
          <img
            style={styleImg}
            src="https://i.im.ge/2023/01/26/svfF6m.jwt.png"
          />
        </Grid>
      </Grid>
      <div style={{ height: "2rem" }}></div>
    </motion.div>
  );
}

export default BrokenOffice;

const styleImg = {
  height: "5.5rem",
  width: "5.5rem",
  objectFit: "cover",
  padding: "0.2rem",
};
