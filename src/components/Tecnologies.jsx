import React from "react";

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
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfo7p.javascript.png"
        />
      </Tooltip>
      <Tooltip placement="top" title="HTML" color="#19bc8b" mouseEnterDelay={0}>
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfQeq.html.png"
        />
      </Tooltip>

      <Tooltip placement="top" title="CSS" color="#19bc8b" mouseEnterDelay={0}>
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfMcC.css.png"
        />
      </Tooltip>
      <Tooltip
        placement="top"
        title="React"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfdgT.React.png"
        />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Redux"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svf7CG.redux.png"
        />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Material Ui"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfOVr.materialui.png"
        />
      </Tooltip>
      <Tooltip
        placement="top"
        title="PostgreSQL"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfS00.psql.png"
        />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Sequelize"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfLSa.sequelize.png"
        />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Node.js"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svf2lW.nodejs.png"
        />
      </Tooltip>
      <Tooltip
        placement="top"
        title="Firebase"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfXCP.firebase.png"
        />
      </Tooltip>
      <Tooltip
        placement="top"
        title="JsonWebToken"
        color="#19bc8b"
        mouseEnterDelay={0}
      >
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svfF6m.jwt.png"
        />
      </Tooltip>
      <Tooltip placement="top" title="Git" color="#19bc8b" mouseEnterDelay={0}>
        <img
          className={styleTech.icon}
          style={styleImg}
          src="https://i.im.ge/2023/01/26/svVei4.git.png"
        />
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
