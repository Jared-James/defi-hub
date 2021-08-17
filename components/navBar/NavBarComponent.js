import React, {useState} from "react";
import styles from "./NavBar.module.css";
import { FaBitcoin } from "react-icons/fa";
import styled from 'styled-components'


const Nav = styled.div`
  display: flex;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  justify-content: flex-start;
  align-items: center;
  height: 4rem;
  border-bottom: 0.5px solid #000;
  background: #000046;
  background: -webkit-linear-gradient(to right, #1cb5e0, #000046);
  background: linear-gradient(to right, #1cb5e0, #000046);
`

const navBarComponent = () => {
const [signIn, setSignIn] = useState(false)
const handleSignIn = () => setSignIn(!signIn)



  return (
    <Nav>
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
    </Nav>
  );
};

export default navBarComponent;
