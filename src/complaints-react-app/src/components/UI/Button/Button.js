import React, { Component } from 'react';

const button = (props) => (
  <button disabled={props.disabled} onClick={props.clicked} className={props.btnType} >{props.children}</button>
);

export default button;