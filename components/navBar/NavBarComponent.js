import React from 'react'
import styles from "./NavBar.module.css";
import { FaBitcoin } from 'react-icons/fa';

const navBarComponent = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav__bitcoin}><FaBitcoin /></div>
            <div className={styles.nav__title}>Coin Guide</div>
        </div>
    )
}

export default navBarComponent
