import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        purchasable: false,
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        this.setState((prevState) => {
            const newCount = prevState.ingredients[type] + 1;
            const newIngredients = { ...prevState.ingredients };
            newIngredients[type] = newCount;
            return {
                ingredients: newIngredients,
                totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
                ...this.updatePurchaseState(newIngredients)
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
            this.updatePurchaseState(updatedIngredients);
            return {
                ingredients: updatedIngredients,
                totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
                ...this.updatePurchaseState(updatedIngredients)
            }
        });
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(key =>{
            return ingredients[key];
        })
        .reduce((sum, el) =>{
            return sum + el;
        }, 0);
        return {purchasable: sum > 0};
    }

    render() {
        console.log(this.state);
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }


        return (
            <React.Fragment>
                <Modal><OrderSummary ingredients={this.state.ingredients}/></Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls moreClicked={this.addIngredientHandler} 
                               lessClicked={this.removeIngredientHandler} 
                               disabled={disabledInfo}
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}/>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;