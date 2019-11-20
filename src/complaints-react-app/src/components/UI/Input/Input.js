import React, { Component } from 'react';

const input = (props) => {
  let inputElement = null;
  const inputClasses = ['form-control'];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push('border-danger');
  }

  switch (props.elementType) {
    case ('input'): inputElement = <input
      {...props.elementConfig} value={props.value}
      className={inputClasses.join(' ')} onChange={props.changed} />;
      break;
    case ('textarea'): inputElement = <textarea {...props.elementConfig} value={props.value} className="form-control" onChange={props.changed} />;
      break;
    case ('select'): inputElement = (<select {...props.elementConfig} value={props.value} className="form-control" onChange={props.changed}>
      {props.elementConfig.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.displayValue}
        </option>
      ))}
    </select>);
      break;
    default: inputElement = <input {...props.elementConfig} value={props.value} className="form-control" />
  }
  return (
    <div className="form-group mb-1">
      <label>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input;