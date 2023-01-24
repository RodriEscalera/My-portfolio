import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Tecnologies from "./Tecnologies";
function Home() {
  const isActive = useMediaQuery("(max-width: 910px)");
  const query = useMediaQuery("(max-width: 647px)");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: query ? "40rem" : "0",
          marginTop: query ? "0" : "30rem",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0.5, scale: 4 }}
        animate={{ opacity: 1, scale: 0.8 }}
        transition={{
          duration: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        exit={{
          scale: 5,
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
        }}
        style={{
          flexDirection: "column",
          overflowX: "hidden",
          overflowY: "hidden",
          position: "absolute",
        }}
      >
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
          }}
          variant={isActive === false ? "h1" : "h2"}
        >
          RODRIGO ESCALERA
        </Typography>
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
          }}
          variant={isActive === false ? "h3" : "h4"}
        >
          FULLSTACK DEVELOPER
        </Typography>

        <Tecnologies />
      </motion.div>
    </div>
  );
}

export default Home;
