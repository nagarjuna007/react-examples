import React, { Component } from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well!!</h1>
      <div>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancelled} btnType="btn btn-danger mr-2">Cancel</Button>
      <Button clicked={props.checkoutContinued} btnType="btn btn-success">Continue</Button>
    </div>
  )
}

export default checkoutSummary;