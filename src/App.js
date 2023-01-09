import "./App.css";
import NavBar from "./components/NavBar";
import { useDispatch } from "react-redux";
import { setLanguage } from "./store/language";
import { useEffect, useRef } from "react";
import ParticlesCustom from "./components/ParticlesCustom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useMediaQuery } from "@mui/material";
import NavBarMobile from "./components/NavBarMobile";
import Options from "./components/Options";

function App() {
  const isActive = useMediaQuery("(max-width:650px)");
  const appRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLanguage(window.localStorage.getItem("language")));
  }, []);

  return (
    <div ref={appRef}>
      <NavBar />
      <div style={{ height: "4rem" }}></div>
      <ParticlesCustom />
      <AnimatedRoutes />
      <Options />
      {isActive && (
        <>
          <NavBarMobile appRef={appRef} />
        </>
      )}
      <div style={{ height: "2rem" }}></div>
    </div>
  );
}

export default App;
