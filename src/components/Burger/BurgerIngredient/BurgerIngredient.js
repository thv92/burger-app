import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom} />
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1} />
                        <div className={styles.Seeds2} />
                    </div>
                );
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese} />
                break;
            case ('salad'):
                ingredient = <div className={styles.salad} />
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat} />
                break;
            case ('bacon'):
                ingredient = <div className={styles.Bacon} />
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.isRequired
};



export default BurgerIngredient;