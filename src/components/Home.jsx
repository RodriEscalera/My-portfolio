import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Tecnologies from "./Tecnologies";
function Home() {
  const language = useSelector((state) => state.language);

  const isActive = useMediaQuery("(max-width: 910px)");
  const fixResolution = useMediaQuery("(max-width: 376px)");
  // console.log(isActive);
  console.log(fixResolution);
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5, scale: 4 }}
        animate={{ opacity: 1, scale: 1 }}
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
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          flexDirection: "column",
          overflowX: "hidden",
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
    </>
  );
}

export default Home;
