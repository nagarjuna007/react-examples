import React, { Component } from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} Years Old! <b>{props.children}</b></p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
  //{Math.floor(Math.random() * 30)}
}
export default Person;

// export default Radium(Person);