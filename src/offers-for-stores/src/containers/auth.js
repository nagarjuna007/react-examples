import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateObject } from "../shared/utility";
import * as actions from "../store/actions/index";

const auth = props => {
  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value
      })
    });
    setAuthForm(updatedControls);
  };
  const [authForm, setAuthForm] = useState({
    userName: " ",
    password: " "
  });
  const submitHandler = event => {
    event.preventDefault();
    console.log(authForm.password.value);
  };
  return (
    <form onSubmit={submitHandler} className="form-theme-1 login-main-block">
      <div className="login-block">
        <h3 className="mt-0 pt-0 text-white pb-3 text-center">LOGIN HERE</h3>
        <div className="row">
          <div className="col-12">
            <div className="custom-form-group mb-3">
              <label>User Name</label>
              <input
                type="text"
                className="line-input"
                key="authForm.userName"
                value={authForm.userName.value}
                onChange={event => inputChangedHandler(event, "userName")}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="custom-form-group mb-3">
              <label>Password</label>
              <input
                type="text"
                className="line-input"
                key="authForm.password"
                value={authForm.password.value}
                onChange={event => inputChangedHandler(event, "password")}
              />
            </div>
          </div>
          <div className="col-12 mt-1 text-center">
            <small className="d-block mb-4 text-white">
              No EXT Account . . <i>Click Here</i> to SIGNUP
            </small>
            <button type="submit">
              <span>SUBMIT</span>
            </button>
          </div>
        </div>
      </div>
    </form>
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
)(auth);
