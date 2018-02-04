import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: .5,
    meat: 1.3,
    bacon: 0.7,
    cheese: 0.4
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        this.setState((prevState) => {
            const newCount = prevState.ingredients[type] + 1;
            const newIngredients = { ...prevState.ingredients };
            newIngredients[type] = newCount;
            return {
                ingredients: newIngredients,
                totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
            }
        });
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }
        this.setState((prevState) => {
            const newCount = prevState.ingredients[type] - 1;
            const updatedIngredients = { ...prevState.ingredients };
            updatedIngredients[type] = newCount;
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
            }
        });
    }

    render() {
        console.log(this.state);
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls moreClicked={this.addIngredientHandler} 
                               lessClicked={this.removeIngredientHandler} 
                               disabled={disabledInfo}
                               price={this.state.totalPrice}/>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;