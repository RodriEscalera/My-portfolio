import React from "react";
import javascript from "../assets/tecnologies/javascript.png";
import css from "../assets/tecnologies/css.png";
import html from "../assets/tecnologies/html.png";
import jwt from "../assets/tecnologies/jwt.png";
import materialui from "../assets/tecnologies/materialui.png";
import git from "../assets/tecnologies/git.png";
import psql from "../assets/tecnologies/psql.png";
import react from "../assets/tecnologies/React.png";
import redux from "../assets/tecnologies/redux.png";
import firebase from "../assets/tecnologies/firebase.png";
import sequelize from "../assets/tecnologies/sequelize.png";
import nodejs from "../assets/tecnologies/nodejs.png";
import styleTech from "../styles/Tecnologies.module.css";
import { Tooltip } from "antd";
function Tecnologies() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "2rem",
      }}
    >
      <Tooltip
        placement="top"
        title="Javascript"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={javascript} />
      </Tooltip>
      <Tooltip placement="top" title="HTML" color="#19bc8b" mouseEnterDelay={0}>
        <img className={styleTech.icon} style={styleImg} src={html} />
      </Tooltip>

      <Tooltip placement="top" title="CSS" color="#19bc8b" mouseEnterDelay={0}>
        <img className={styleTech.icon} style={styleImg} src={css} />
      </Tooltip>
      <Tooltip
        placement="top"
        title="React"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={react} />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Redux"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={redux} />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Material Ui"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={materialui} />
      </Tooltip>
      <Tooltip
        placement="top"
        title="PostgreSQL"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={psql} />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Sequelize"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={sequelize} />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Node.js"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={nodejs} />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Firebase"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={firebase} />
      </Tooltip>
      <Tooltip
        placement="top"
        title="JsonWebToken"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img className={styleTech.icon} style={styleImg} src={jwt} />
      </Tooltip>
      <Tooltip placement="top" title="Git" color="#19bc8b" mouseEnterDelay={0}>
        <img className={styleTech.icon} style={styleImg} src={git} />
      </Tooltip>
    </div>
  );
}

export default Tecnologies;

const styleImg = {
  height: "5.5rem",
  width: "5.5rem",
  objectFit: "cover",
  padding: "0.2rem",
};
