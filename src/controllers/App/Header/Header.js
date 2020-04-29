import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.sass";

const Header = (props) => {
  return (
    <header className={`${styles["header"] || ""}`}>
      <Link to={`/`}>
        <img
          src="https://www.webmotors.com.br/assets/img/webmotors.svg"
          alt="Webmotors"
          title="Webmotors"
        />
      </Link>
    </header>
  );
};

export default Header;
