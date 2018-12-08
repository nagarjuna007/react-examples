import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredentSummary = Object.keys(props.ingredients).map(
    igKey => {
      return (<li key={igKey}>{igKey}:{props.ingredients[igKey]}</li>);
    });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Burger with the following ingredents</p>
      <ul>
        {ingredentSummary}
      </ul>
      <h4>Total Price: {props.price.toFixed(2)}</h4>
      <p>Continue to Checkout..??</p>
      <Button btnType="btn btn-danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="btn btn-success" clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
  )
};

export default orderSummary; 