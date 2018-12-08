import React, { Component } from 'react';
import './BuildControl.css';

const buildControl = (props) => (
  <div className="BuildControl d-flex">
    <div className="px-2 dataLabels">{props.label}</div>
    <div className="px-1">
      <button type="button" className="btn btn-primary" onClick={props.removed} disabled={props.disabled}>Less</button>
    </div>
    <div className="px-1">
      <button type="button" className="btn btn-primary" onClick={props.added}>More</button>
    </div>
  </div>
);

export default buildControl;