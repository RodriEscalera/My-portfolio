import React, { useEffect, useRef, useState } from "react";
import { TextField, Typography, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import SocialMedia from "./SocialMedia";
import { message, Space } from "antd";
import { motion } from "framer-motion";
function Contact() {
  const language = useSelector((state) => state.language);
  const fiveHundredPx = useMediaQuery("(max-width:510px)");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zplbo79",
        "template_a6q1bbg",
        form.current,
        "H2amU_909WPX4s-lM"
      )
      .then(
        (result) => {
          success();
          resetInputs();
        },
        (error) => {
          errorMessage();
          console.log(error.text);
        }
      );
  };

  //------------------>FEEDBACK
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content:
        language.language === "ENGLISH"
          ? "Mail sent successfully"
          : "Mail enviado con éxito",
      style: {
        zIndex: "2",
      },
    });
  };
  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content:
        language.language === "ENGLISH"
          ? "Mail has not been sent :("
          : "El mail no se ha enviado :(",
      style: {
        zIndex: "2",
      },
    });
  };

  //--------------------------------

  ////--------------> CONTROLLED INPUTS
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const handlerName = (e) => {
    setName(e.target.value);
  };
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerMessage = (e) => {
    setMessageInput(e.target.value);
  };
  const resetInputs = () => {
    setName("");
    setEmail("");
    setMessageInput("");
  };
  //------------------------------------------

  ///-----------------------> SEND MAIL BUTTON
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (name === "" || email === "" || messageInput === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [name, email, messageInput]);
  ///---------------------------------------------------

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        // delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      {contextHolder}
      <Typography
        variant={!fiveHundredPx ? "h2" : "h3"}
        sx={{ color: "white" }}
      >
        {language.language === "ENGLISH" ? "CONTACT ME!" : "CONTACTAME!"}
      </Typography>

      <form
        autocomplete="off"
        onSubmit={sendEmail}
        ref={form}
        style={{
          height: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ThemeProvider theme={textFieldTheme}>
          <TextField
            value={name}
            onChange={handlerName}
            variant="filled"
            sx={{
              "& label": { color: "white" },
              width: fiveHundredPx ? "20rem" : "30rem",
              marginTop: "3rem",
              backgroundColor: "#121212",
              borderRadius: "0.3rem",
            }}
            label={language.language === "ENGLISH" ? "Name" : "Nombre"}
            type="text"
            name="user_name"
          />
          <TextField
            value={email}
            onChange={handlerEmail}
            variant="filled"
            sx={{
              "& label": { color: "white" },
              width: fiveHundredPx ? "20rem" : "30rem",
              marginTop: "1rem",
              backgroundColor: "#121212",
              borderRadius: "0.3rem",
            }}
            label="Email"
            type="email"
            name="user_email"
          />
          <TextField
            value={messageInput}
            onChange={handlerMessage}
            variant="filled"
            sx={{
              "& label": { color: "white" },
              width: fiveHundredPx ? "20rem" : "30rem",
              marginTop: "1rem",
              backgroundColor: "#121212",
              borderRadius: "0.3rem",
            }}
            label={language.language === "ENGLISH" ? "Message" : "Mensaje"}
            type="text"
            multiline
            maxRows={5}
            name="message"
          />
        </ThemeProvider>
        <ThemeProvider theme={buttonCustom}>
          <Button
            disabled={isDisabled}
            variant="contained"
            onClick={sendEmail}
            sx={{
              borderRadius: "50rem",
              marginTop: "1rem",
              "&:hover": {
                backgroundColor: "#19bc8b",
              },
              "&:disabled": {
                backgroundColor: "#141414",
                color: "grey",
              },
            }}
          >
            {language.language === "ENGLISH" ? "SEND MAIL" : "ENVIAR MAIL"}
          </Button>
        </ThemeProvider>
      </form>

      <div style={{ height: "4rem" }}></div>

      <SocialMedia />
      <div style={{ height: "2rem" }}></div>
    </motion.div>
  );
}

export default Contact;

const textFieldTheme = createTheme({
  palette: {
    primary: {
      main: "#19bc8b",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#ffffff",
    },
    disabled: {
      main: "#f50057",
    },
  },
});
const buttonCustom = createTheme({
  palette: {
    primary: {
      main: "#19bc8b",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
