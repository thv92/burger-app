import React from 'react';
import styles from './BuildControl.css';

const buildControl = (props) => {

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.Less} onClick={props.lessClicked} disabled={props.disabled}>Less</button>
            <button className={styles.More} onClick={props.moreClicked}>More</button>
        </div>
    );


}

export default buildControl;