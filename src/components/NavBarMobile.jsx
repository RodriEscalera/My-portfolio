import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setMobileNav } from "../store/mobileNav";

function NavBarMobile({ appRef }) {
  const mobileNav = useSelector((state) => state.mobileNav);
  const dispatch = useDispatch();
  const [isActivated, setIsActivated] = useState(false);
  const handleClick = () => {
    if (isActivated === false) {
      setIsActivated(true);
      dispatch(setMobileNav(true));
    } else {
      setIsActivated(false);
      dispatch(setMobileNav(false));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "start",
      }}
    >
      <motion.div
        onClick={handleClick}
        drag="y"
        dragConstraints={appRef}
        style={{
          zIndex: 3,
          height: "4rem",
          width: "4rem",
          backgroundColor: "white",
          borderRadius: "3rem",
          marginRight: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            color: "#19bc8b",
            "&:active": {
              color: "#19bc8b",
            },
          }}
        >
          <MenuIcon
            sx={{
              color: mobileNav ? "#19bc8b" : "black",
              fontSize: "2rem",

              "&:active": {
                // transition: "0.35s",
                color: "#19bc8b",
              },
            }}
          />
        </IconButton>
      </motion.div>
    </div>
  );
}

export default NavBarMobile;
