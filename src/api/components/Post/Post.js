import React, { Component } from 'react';

const post = (props) => (
  <div className="post col-sm-12 mb-1 p-1">
    <div className="bg-white p-2" onClick={props.clicked}>
      <b>{props.title}</b>
      <p>{props.author}</p>
    </div>
  </div>
);

export default post;