import React from 'react';

/* burgerLogo is just the path that webpack will generate for it after import made it acknowledge such image exists */
import burgerLogo from '../../assets/Images/burger-logo.png';

import styles from './Logo.css';

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="myBurger"/>
    </div>
);



export default logo;