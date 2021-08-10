import React from "react";
import styles from "./NavBar.module.css";
import { FaBitcoin } from "react-icons/fa";

const navBarComponent = () => {
    let signin = false
  return (
    <div className={styles.nav}>
      <div className={styles.nav__bitcoin}>
        <FaBitcoin />
      </div>
      <div className={styles.nav__title}>Coin Guide</div>
      <div className={styles.nav__links}>
       <ul className={styles.nav__list}>
          { signin && (
               <li className={styles.nav__list_item}>Profile</li>
          )}
           <li className={styles.nav__list_item}>Sign in</li>
           <li>Register</li>
           {/* <li>NZD</li> */}
       </ul>
      </div>
    </div>
  );
};

export default navBarComponent;
