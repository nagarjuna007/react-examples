import React, { Component } from 'react';
import './PersonData.css';

const PersonData = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} Years Old! <b>{props.children}</b></p>
      <input type="text" onChange={props.changed} />
    </div>
  )
  //{Math.floor(Math.random() * 30)}
}
export default PersonData;
