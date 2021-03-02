import React from 'react';
import styles from './Logo.module.css';
import coronaLogo from '../image/covid.png';


const Logo = () => {
    return <img src={coronaLogo}
                className={styles.logoCorona} alt="Covid 19">

            </img>

}

export default Logo