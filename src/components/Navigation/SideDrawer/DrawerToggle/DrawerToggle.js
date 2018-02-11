import React from 'react';
import styles from './DrawerToggle.css';

const toggle = (props) => (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        <div />
        <div />
        <div />
    </div>
);


export default toggle;