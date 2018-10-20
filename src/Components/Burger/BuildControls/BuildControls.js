import React, { Component } from 'react';
import BuildControl from './BuildControl';
import './BuildControl.css';

const controls = [
  { label: 'salad', type: 'salad' },
  { label: 'bacon', type: 'bacon' },
  { label: 'cheese', type: 'cheese' },
  { label: 'meat', type: 'meat' }
]

const buildControls = (props) => (
  <div className="BuildControls">
    <p>Current Price: {props.price.toFixed(2)}</p>
    {controls.map(ctrl => (
      <BuildControl
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button type="button" disabled={!props.purchasable} className="btn btn-primary mt-2" onClick={props.ordered}>ORDER NOW</button>
  </div>
);

export default buildControls;