import React from "react";
import { Link } from "react-router-dom";

import SideNavData from "./SideNavData";
import styles from "../../assets/styles/navbar.module.scss";

const SideNavBar = () => {
  return (
    <>
      {/* <div className={styles.navbar}>
        <img src={logo} alt="innoloft logo" className={styles.logo} />
      </div> */}
      <nav className={styles.sidebar}>
        <ul>
          {SideNavData.map((item) => (
            <li>
              <Link to={`${item.path}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNavBar;
