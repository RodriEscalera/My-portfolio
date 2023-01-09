import React from "react";
import { AppBar, Menu, MenuItem, useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import "../ButtonGlow.css";
import "../ButtonPack.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/language";
function NavBar() {
  const isActive = useMediaQuery("(max-width:650px)");
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

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

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

              <Box sx={{ flexGrow: "0.5" }}></Box>

              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  color: "white",
                  "&:hover": {
                    transition: "0.35s",
                    color: "#19bc8b",
                  },
                }}
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
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: "1" }}></Box>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  color: "white",
                  "&:hover": {
                    transition: "0.35s",
                    color: "#19bc8b",
                  },
                }}
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
