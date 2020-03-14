import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const profile = props => {
  return (
    <div className="container pt-2">
      <h4 className="mb-1">Nagarjuna Tamarada</h4>
      <small className="d-block pb-3">
        You're a STORE OWNER please switch role..
      </small>
      <p className="mb-1">Location - Hyderabad, India</p>
      <p>Interested Categories - Cloths, Footware</p>
      <button type="button" className="mr-3 mb-2">
        <span>ADD OFFER</span>
      </button>
      <button type="button" className="mr-3 mb-2">
        <span>VIEW POSTED OFFER</span>
      </button>
    </div>
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
)(profile);
