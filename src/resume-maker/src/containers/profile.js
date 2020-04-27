import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import { Link } from "react-router-dom";

const profile = props => {
  useEffect(() => {
    if (props.isAuthenticated) {
      props.onProfileDetails();
    }
  }, []);

  const lastConnected = localStorage.getItem("editorLastConnected");
 // console.log(props.userProfileDetails);
  return (
    <div className="container pt-2">
      <h4 className="mb-1">{props.userProfileDetails.firstName} {props.userProfileDetails.lastName}</h4>
      <small className="d-block pb-3">Last seen - {lastConnected}</small>
      <p>RESUME Title - {props.userProfileDetails.resumeTitle}</p>
      <ul className="list-inline profile-list">
        <li>Email - {props.loginEmail}</li>
        <li>Total Experience - {props.userProfileDetails.totalExperience}</li>
        <li>Relevent Experence - {props.userProfileDetails.releventExperence}</li>
        <li>Primary skills - {props.userProfileDetails.primarySkills}</li>
        <li>secondary skills - {props.userProfileDetails.secondarySkills}</li>
        <li>Prefered location - {props.userProfileDetails.preferedLocation}</li>
        <li>Projects - {props.userProfileDetails.projects}</li>
        <li>Profile description - {props.userProfileDetails.profileDescription}</li>
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
    loginEmail: state.auth.email,
    isAuthenticated: state.auth.token !== null,
    userProfileDetails: state.profileInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProfileDetails: () => {
      dispatch(actions.profileDetails());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profile);
