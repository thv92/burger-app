import React from 'react';
import styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    let ingredientsArr = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
            .map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        }).reduce((prevArr, currArr) =>{
            return prevArr.concat(currArr)
        }, []);

    if(ingredientsArr.length === 0) {
        ingredientsArr = <p>Please start adding ingredients</p>
    }


    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredientsArr}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );

}

export default burger;