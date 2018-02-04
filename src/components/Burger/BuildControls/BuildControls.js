import React from 'react';

import styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'}
];

const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <p><strong>Current Price: {props.price.toFixed(2)}</strong></p>
            {controls.map((ele) => {
                return <BuildControl 
                            key={ele.label} 
                            label={ele.label} 
                            moreClicked={() => {props.moreClicked(ele.type)}} 
                            lessClicked={() => {props.lessClicked(ele.type)}}
                            disabled={props.disabled[ele.type]}/>
            })}
            <button disabled={!props.purchasable} className={styles.OrderButton}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;