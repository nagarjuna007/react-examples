import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { Link } from "react-router-dom";

const profile = props => {
  const lastConnected = localStorage.getItem("editorLastConnected");
  console.log(lastConnected);
  
  return (
    <div className="container pt-2">
      <h4 className="mb-1">First Name Last Name</h4>
      <small className="d-block pb-3">Last seen - {lastConnected}</small>
      <p>Resume Title - Resume Title</p>
      <ul className="list-inline profile-list">
        <li>Email - {props.loginEmail}</li>
        <li>Total Experience - Hyderabad, India</li>
        <li>Relevent Experence - Hyderabad, India</li>
        <li>Primary skills - Hyderabad, India</li>
        <li>secondary skills - Hyderabad, India</li>
        <li>Prefered location - Hyderabad, India</li>
        <li>Projects - Hyderabad, India</li>
        <li>Profile description - Hyderabad, India</li>
      </ul>
      <Link className="btn btn-black mr-1" to="/addOffer">
        create resume
      </Link>
      <Link className="btn btn-black" to="/editProfile">
        Edit Profile
      </Link>
      <h4 className="pt-4 mt-2">view Created Resume</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loginEmail: state.auth.email
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profile);
