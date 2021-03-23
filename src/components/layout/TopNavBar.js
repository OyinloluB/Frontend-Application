import React from "react";

import logo from "../../assets/images/logo.svg";
import styles from "../../assets/styles/navbar.module.scss";

const TopNavBar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="innoloft logo" className={styles.logo} />
    </div>
  );
};

export default TopNavBar;
