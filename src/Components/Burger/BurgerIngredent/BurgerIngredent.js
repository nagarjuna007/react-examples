import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredent.css';

class BurgerIngredent extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case ("bread-bottom"): ingredient = <div className="bread-bottom"></div>;
        break;
      case ("bread-top"): ingredient = (
        <div className="bread-top">
          <div className="seeds"></div>
          <div className="seeds2"></div>
        </div>
      )
        break;
      case ("meat"): ingredient = <div className="meat"></div>;
        break;
      case ("cheese"): ingredient = <div className="cheese"></div>;
        break;
      case ("bacon"): ingredient = <div className="bacon"></div>;
        break;
      case ("salad"): ingredient = <div className="salad"></div>;
        break;
      default: ingredient = null
    }
    return ingredient;
  }
}
BurgerIngredent.propTypes = {
  type: PropTypes.string.isRequired
};
export default BurgerIngredent;