import React, { Component } from 'react';


import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState((prevState) =>{
            return {showSideDrawer: false};
        });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <React.Fragment>
                <SideDrawer opened={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}


export default Layout;