import { useMediaQuery } from "@mui/material";
import React from "react";
import gitHubIcon from "../assets/socialMedia/gitHubWhite.png";
import linkedinWhite from "../assets/socialMedia/linkedinWhite.png";
import mailCirlceWhite from "../assets/socialMedia/mailCirlceWhite.png";
function SocialMedia() {
  const fiveHundredPx = useMediaQuery("(max-width:510px)");

  /////------------->LINKS
  const gitHubRef = () => {
    window.open("https://github.com/Rodriix99?tab=repositories", "_blank");
  };
  const linkedinRef = () => {
    window.open(
      "https://www.linkedin.com/in/rodrigo-escalera-a00a97252/",
      "_blank"
    );
  };
  const mailRef = () => {
    window.open("mailto:roescal347@gmail.com", "_blank");
  };
  //-------------------------------------------
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div
        className="glow-on-hover"
        style={{
          height: fiveHundredPx ? "5rem" : "6rem",
          width: fiveHundredPx ? "5rem" : "6rem",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
        }}
      >
        <img
          onClick={gitHubRef}
          style={{
            height: fiveHundredPx ? "4rem" : "5rem",
            width: fiveHundredPx ? "4rem" : "5rem",
          }}
          src={gitHubIcon}
        />
      </div>

      <div
        className="glow-on-hover"
        style={{
          height: fiveHundredPx ? "5rem" : "6rem",
          width: fiveHundredPx ? "5rem" : "6rem",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
        }}
      >
        <img
          onClick={linkedinRef}
          style={{
            height: fiveHundredPx ? "4rem" : "5rem",
            width: fiveHundredPx ? "4rem" : "5rem",
          }}
          src={linkedinWhite}
        />
      </div>

      <div
        className="glow-on-hover"
        style={{
          height: fiveHundredPx ? "5rem" : "6rem",
          width: fiveHundredPx ? "5rem" : "6rem",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
        }}
      >
        <img
          onClick={mailRef}
          style={{
            height: fiveHundredPx ? "4.7rem" : "5.7rem",
            width: fiveHundredPx ? "4.7rem" : "5.7rem",
          }}
          src={mailCirlceWhite}
        />
      </div>
    </div>
  );
}

export default SocialMedia;
