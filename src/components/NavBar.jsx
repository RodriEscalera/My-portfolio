import React from "react";
import { AppBar, Menu, MenuItem, useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import "../styles/ButtonGlow.css";
import "../styles/ButtonPack.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/language";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import { setFX } from "../store/fxControl";
function NavBar() {
  const isActive = useMediaQuery("(max-width:650px)");
  //--------------------> LANGUAGE
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOption = (e) => {
    dispatch(setLanguage(e.target.outerText));
    window.localStorage.setItem("language", e.target.outerText);
    setAnchorEl(null);
  };
  //------------------------------->

  //--------------------> FX

  const [anchorFx, setAnchorFx] = React.useState(null);
  const openFx = Boolean(anchorFx);
  const handleClickFx = (event) => {
    setAnchorFx(event.currentTarget);
  };
  const handleCloseFx = () => {
    setAnchorFx(null);
  };
  const handleOptionFx = (e) => {
    dispatch(setFX(e.target.outerText));
    window.localStorage.setItem("fx", e.target.outerText);
    setAnchorFx(null);
  };

  //------------------------->

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const fx = useSelector((state) => state.fx);

  return (
    <>
      <AppBar sx={{ zIndex: "2", backgroundColor: "black" }}>
        <Toolbar
          sx={{
            height: "5rem",
            backgroundColor: "black",
            display: "flex",
          }}
        >
          {!isActive ? (
            <>
              <Box sx={{ flexGrow: "0.5" }}></Box>
              <Link to="/">
                <button className="button raise">
                  {language.language === "ENGLISH" ? "HOME" : "INICIO"}
                </button>
              </Link>

              <Link to="/aboutme">
                <button className="button raise">
                  {language.language === "ENGLISH" ? "ABOUT ME" : "SOBRE MÍ"}
                </button>
              </Link>

              <Link to="/projects">
                <button className="button raise">
                  {language.language === "ENGLISH" ? "PROJECTS" : "PROYECTOS"}
                </button>
              </Link>

              <Link to="/contact">
                <button className="button raise">
                  {language.language === "ENGLISH" ? "CONTACT" : "CONTACTO"}
                </button>
              </Link>
            </>
          ) : null}

          <Box sx={{ flexGrow: !isActive ? "0.5" : "1" }}></Box>

          <IconButton
            sx={iconStyle}
            id="fx"
            aria-controls={openFx ? "fx-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openFx ? "true" : undefined}
            onClick={handleClickFx}
          >
            <ShutterSpeedIcon sx={{ fontSize: "2rem" }} />
          </IconButton>

          <Menu
            id="fx-menu"
            anchorEl={anchorFx}
            open={openFx}
            onClose={handleCloseFx}
            MenuListProps={{
              "aria-labelledby": "fx",
            }}
            sx={{
              "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                {
                  backgroundColor: "#1c1c1c",
                },
            }}
          >
            <MenuItem sx={{ color: "#19bc8b" }} onClick={handleOptionFx}>
              FX ON
            </MenuItem>
            <MenuItem sx={{ color: "#19bc8b" }} onClick={handleOptionFx}>
              FX OFF
            </MenuItem>
          </Menu>

          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={iconStyle}
          >
            <LanguageIcon sx={{ fontSize: "2rem" }} />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                {
                  backgroundColor: "#1c1c1c",
                },
            }}
          >
            <MenuItem sx={{ color: "#19bc8b" }} onClick={handleOption}>
              ESPAÑOL
            </MenuItem>
            <MenuItem sx={{ color: "#19bc8b" }} onClick={handleOption}>
              ENGLISH
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

const iconStyle = {
  color: "white",
  "&:hover": {
    color: "#19bc8b",
  },
};

export default NavBar;
