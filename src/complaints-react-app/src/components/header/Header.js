import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Header.scss";

const header = props => {
  return (
    <div className="bg-white">
      <div className="container-fluid py-2 font-weight-900">
        <div className="row">
          <div className="col-6">COMPLAINTS</div>
          <div className="col-6 text-right">
            <span>{!props.isAuthenticated ? "Login" : "Logout"}</span>
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(header);
