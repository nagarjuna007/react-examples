import React, { Component } from 'react';
import './BuildControl.css';

const buildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button
      className="btn btn-priamry"
      onClick={props.removed}
      disabled={props.disabled}>Less</button>
    <button
      className="btn btn-priamry"
      onClick={props.added}>More</button>
  </div>
);

export default buildControl;
