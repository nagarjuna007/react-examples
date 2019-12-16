import React, { useState, useEffect } from "react";
import {
  Route,
  Redirect,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
import { connect } from "react-redux";
import "./Header.scss";
import * as actions from "../../store/actions/index";

const header = props => {
  const loginLogout = event => {
    if (props.isAuthenticated) {
      //logout
      props.onLogout();
   //   props.onSetAuthRedirectPath("/auth");
    } else {
   //   props.onSetAuthRedirectPath("/auth");
    }
  };

  return (
    <div className="bg-white">
      <div className="container-fluid py-2 font-weight-900">
        <div className="row">
          <div className="col-6">COMPLAINTS</div>
          <div className="col-6 text-right">
            <Link to="/auth" onClick={event => loginLogout()}>
              {!props.isAuthenticated ? "Login" : "Logout"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onSetAuthRedirectPath: path => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(header);
