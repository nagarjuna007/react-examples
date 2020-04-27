import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { updateObject } from "../shared/utility";
import * as actions from "../store/actions/index";

const auth = props => {
  useEffect(() => {
    if (props.isAuthenticated) {
      props.onSetAuthRedirectPath();
    }
  }, []);

  const [isSignup, setIsSignup] = useState(true);
  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };
  const [authForm, setAuthForm] = useState({
    userName: " ",
    password: " "
  });
  const inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value
      })
    });
    setAuthForm(updatedControls);
  };
  const submitHandler = event => {
    event.preventDefault();
    props.onAuth(authForm.userName.value, authForm.password.value, isSignup);
  };

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }
  return (
    <form onSubmit={submitHandler} className="form-theme-1 login-main-block">
      <div className="login-block">
      {authRedirect}
        <h3 className="mt-0 pt-0 text-white pb-3 mb-3 text-center">LOGIN HERE</h3>
        <div className="row">
          <div className="col-12">
            <div className="custom-form-group mb-3">
              <label>E-Mail Address</label>
              <input
                type="text"
                className="line-input"
                key="authForm.userName"
                value={authForm.userName.value || ""}
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
                value={authForm.password.value || ""}
                onChange={event => inputChangedHandler(event, "password")}
              />
            </div>
          </div>
          <div className="col-12 mt-1 text-center">
            <small
              className="d-block mb-4 text-white cursor-pointer"
              onClick={switchAuthModeHandler}
            >
              <i>Click Here</i> to switch {!isSignup ? "SIGNIN" : "SIGNUP"}
            </small>
            <button type="submit" className="button">
              <span>{isSignup ? "SIGNIN" : "SIGNUP"}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUP) => {
      dispatch(actions.auth(email, password, isSignUP));
    },
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(auth);
