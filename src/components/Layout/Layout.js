import React from 'react';


import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.css';

const layout = (props) => {
return (
    <React.Fragment>
        <SideDrawer />
        <Toolbar />
        <main className={styles.Content}>
            {props.children}
        </main>
    </React.Fragment>
);}


export default layout;