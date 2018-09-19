import React, { Component } from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div>
      <p>I'm a {props.name} and I am {props.age} Years Old! <b>{props.children}</b></p>
    </div>
  )
  //{Math.floor(Math.random() * 30)}
}
export default Person;
