import React from 'react'

import styles from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    //Need to do {} function because need conditional renders
    const attachedStyles = [styles.SideDrawer, props.opened ? styles.Open : styles.Close].join(' ');
    return (
        <React.Fragment>
            <Backdrop show={props.opened} clicked={props.closed}/>
            <div className={attachedStyles}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav><NavigationItems /></nav>
            </div>
        </React.Fragment>
    );
}


export default sideDrawer;