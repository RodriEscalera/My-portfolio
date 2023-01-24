import "./styles/App.css";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "./store/language";
import { useEffect, useRef } from "react";
import ParticlesCustom from "./components/ParticlesCustom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useMediaQuery } from "@mui/material";
import NavBarMobile from "./components/NavBarMobile";
import Options from "./components/Options";
import { setFX } from "./store/fxControl";

function App() {
  const isActive = useMediaQuery("(max-width:650px)");
  const appRef = useRef(null);
  const dispatch = useDispatch();
  const fx = useSelector((state) => state.fx);

  useEffect(() => {
    dispatch(setLanguage(window.localStorage.getItem("language")));
    dispatch(setFX(window.localStorage.getItem("fx")));
  }, []);

  return (
    <div ref={appRef}>
      <NavBar />
      <div style={{ height: "4rem" }}></div>
      <ParticlesCustom />
      {isActive && <NavBarMobile appRef={appRef} />}
      <AnimatedRoutes />
      <Options />
    </div>
  );
}

export default App;
