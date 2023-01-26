import { Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import picture from "../assets/picture.png";
import { Grid } from "@mui/material";
import { Tooltip } from "antd";

import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
function AboutMe() {
  const language = useSelector((state) => state.language);
  const isActive = useMediaQuery("(max-width:899px)");
  const sixHundredPx = useMediaQuery("(min-width:600px)");
  const fiveHundredPx = useMediaQuery("(max-width:510px)");

  const [event, setEvent] = useState(false);

  const handleHover = () => {
    setEvent(!event);
  };
  console.log(fiveHundredPx);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          // delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            marginTop: "5rem",
            width: isActive ? "65rem" : "70rem",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Tooltip
              color="#19bc8b"
              placement="top"
              title={
                language.language === "ENGLISH" ? "Download CV" : "Descargar CV"
              }
            >
              <a
                href={
                  language.language === "ENGLISH"
                    ? "../RODRIGO ESCALERA CV EN.pdf"
                    : "../RODRIGO ESCALERA CV ES.pdf"
                }
              >
                <img
                  onMouseOver={handleHover}
                  onMouseLeave={handleHover}
                  style={{
                    width: "20rem",
                    height: "20rem",
                    borderRadius: "50rem",
                    marginTop: "0.2rem",
                  }}
                  src="https://i.im.ge/2023/01/26/svzZlr.picture.png"
                  alt="me"
                />
              </a>
            </Tooltip>
            <AnimatedText
              text={
                language.language === "ENGLISH"
                  ? "Click my picture to download my CV"
                  : "Presiona mi foto para descargar mi CV"
              }
              event={event}
              size={fiveHundredPx ? "1.2rem" : "2rem"}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={
              isActive
                ? {
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }
                : {
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                width: sixHundredPx ? "30rem" : "20rem",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  marginTop: "2rem",
                  display: "block",
                }}
              >
                {language.language === "ENGLISH" ? "ABOUT ME" : "SOBRE MÍ"}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "white",
                  marginTop: "2rem",
                }}
              >
                {language.language === "ENGLISH"
                  ? "Hi! i'm Rodrigo Escalera, a full-stack javascript developer from Salta Argentina. When I finished high school, I discovered programming as a way to do what I like the most, which is to solve problems, applying ingenuity and logic. I trained in the coding bootcamp of plataforma 5, learning PERN and MERN stack, scrum methodology and improving my soft skills. So I can say that enrolling in a coding bootcamp was my best decision. I always look for the opportunity to contribute to the development of projects, both on the technical side and on the social side."
                  : "Soy Rodrigo Escalera, un desarrollador full-stack javascript de Salta, Argentina. Cuando terminé el secundario, descubrí la programación como una forma de hacer lo que más me gusta, que es resolver problemas, aplicando ingenio y lógica. Me formé en el coding bootcamp de plataforma 5, aprendiendo el stack PERN y MERN, la metodología scrum y mejorando mis habilidades blandas. Así que puedo decir que inscribirme en un coding bootcamp fue mi mejor decisión. Siempre busco la oportunidad de contribuir al desarrollo de proyectos, tanto en el aspecto técnico como en el social."}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </motion.div>
      <div style={{ height: "3rem" }}></div>
    </>
  );
}

export default AboutMe;
