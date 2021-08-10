import React, {useState} from "react";
import styles from "./NavBar.module.css";
import { FaBitcoin } from "react-icons/fa";


const navBarComponent = () => {
const [signIn, setSignIn] = useState(false)

const handleSignIn = () => setSignIn(!signIn)



  return (
    <div className={styles.nav}>
      <div className={styles.nav__icon}>
        <FaBitcoin />
      </div>
      <div className={styles.nav__title}>Coin Guide</div>
      <div className={styles.nav__links}>
        <ul className={styles.nav__list}>
          {signIn && <li className={styles.nav__list_item}>Profile</li>}
          <li className={styles.nav__list_item} onClick={handleSignIn}>{!signIn ? 'Sign In' : 'Sign Out'}</li>

    
        </ul>
      </div>
    </div>
  );
};

export default navBarComponent;
