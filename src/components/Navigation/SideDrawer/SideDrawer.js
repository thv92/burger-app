import React from 'react'

import styles from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    //Need to do {} function because need conditional renders
    return (
        <div className={styles.SideDrawer}>
            <Logo height="11%"/>
            <nav><NavigationItems /></nav>
        </div>
    );
}


export default sideDrawer;