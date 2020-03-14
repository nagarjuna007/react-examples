import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import {
  Route,
  Redirect,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import { connect } from "react-redux";
import "./components.scss";

const header = props => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 col-md-6">
            <span className="logo d-inline-block">OFFERS FOR STORES</span>
          </div>
          <div className="col-4 col-md-6 text-right menu-show">
            <span className="menu-icon">
              <i className="fa fa-ellipsis-h" />
            </span>
            <ul className="header-right-links">
              <li>
                <Link to="/postedOffersList">USER</Link>
              </li>
              <li>
                {" "}
                <Link to="/profile">PROFILE</Link>
              </li>
              <li>
                <Link to="/auth">LOGIN</Link>
              </li>
              <li>
                {" "}
                <Link to="/">LOGOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(header);
