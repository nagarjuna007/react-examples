import React, { Component } from 'react';
import './NavigationItem.css';

const navigationItem = (props) => (
  <li className="NavigationItem"><a href={props.link} className={props.active}>{props.children}</a></li>
);

export default navigationItem;