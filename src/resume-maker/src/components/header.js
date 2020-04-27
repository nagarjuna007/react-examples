import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./components.scss";
import * as actions from "../store/actions/index";

const header = props => {
  const logoutHandler = event => {
    event.preventDefault();
    props.onLogout();
  };
  
  let menuItems = (
    <ul className="header-right-links">
      <li>
        <Link to={"/"}>Templates</Link>
      </li>
      <li>
        <Link to={"/auth"}>Login</Link>
      </li>
    </ul>
  );
  if (props.isAuthenticated) {
    menuItems = (
      <ul className="header-right-links">
        <li>
          <Link to={"/"}>Templates</Link>
        </li>
        <li>
          <Link to={"/profile"}>Profile</Link>
        </li>
        <li>
          <a onClick={logoutHandler}>Logout</a>
        </li>
      </ul>
    );
  }
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-md-6">
            <span className="logo d-inline-block">RESUME MAKER</span>
          </div>
          <div className="col-4 col-md-6 text-right menu-show">
            <span className="menu-icon">
              <i className="fa fa-ellipsis-h" />
            </span>
            {menuItems}
          </div>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(actions.logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(header);
