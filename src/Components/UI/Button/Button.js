import React, { Component } from 'react';

const button = (props) => (
  <button onClick={props.clicked} className={props.btnType} type="button">{props.children}</button>
);

export default button;