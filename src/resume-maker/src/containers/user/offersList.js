import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Link } from "react-router-dom";

const offersList = props => {
  let createResumeBtnBlock = null;
  if (props.isAuthenticated) {
    createResumeBtnBlock = (
      <div className="btn-center-block py-4 text-center w-100">
        <Link className="btn btn-black" to="/addOffer">
          create resume
        </Link>
      </div>
    );
  }
  return (
    <div className="container mt-3">
      <div className="card-1">
        <h3 className="mt-0 pt-0 text-white">RESUME - 1</h3>
        <p>Seems UI Developer with 5 years experience</p>
        <ul>
          <li>
            FullName <span className="d-block">Nagarjuna Tamarada</span>
          </li>
          <li>
            Total Exp <span className="d-block">5.5</span>
          </li>
          <li>
            Rel Exp <span className="d-block">2.5</span>
          </li>
          <li>
            Primary skills <span className="d-block">Angular React</span>
          </li>
          <li>
            Secondary skills <span className="d-block">HTML CSS JS</span>
          </li>
          <li>
            Prefered location <span className="d-block">Hyderabad</span>
          </li>
          <li>
            Projects <span className="d-block">Hyderabad</span>
          </li>
          <li>
            Profile description <span className="d-block">Hyderabad</span>
          </li>
        </ul>
      </div>
      {createResumeBtnBlock}
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
)(offersList);
