import React from 'react'

import styles from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    //Need to do {} function because need conditional renders
    return (
        <div className={styles.SideDrawer}>
        <div className={styles.Logo}>
            <Logo />
        </div>
            <nav><NavigationItems /></nav>
        </div>
    );
}


export default sideDrawer;