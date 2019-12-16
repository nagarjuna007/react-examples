import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./auth.scss";
import * as actions from "../../store/actions/index";
import { updateObject } from "../../shared/utility";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

const auth = props => {
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Mail Address"
      },
      value: ""
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password"
      },
      value: ""
    }
  });
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    if (props.authRedirectPath !== "/") {
      props.onSetAuthRedirectPath();
    }
  }, []);

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
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };
  const switchAuthModeHandler = () => {
    setIsSignup(!isSignup);
  };

  const formElementsArray = [];
  for (let key in authForm) {
    formElementsArray.push({
      id: key,
      config: authForm[key]
    });
  }

  let form = formElementsArray.map(formElement => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      changed={event => inputChangedHandler(event, formElement.id)}
    />
  ));
  let errorMessage = null;

  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }
  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to={props.authRedirectPath} />;
  }
  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.data.error.message}</p>;
  }
  return (
    <section className="login-block">
      <div className="d-flex justify-content-center align-items-center position-fixed w-100 login">
        <div className="login-window bg-white rounded">
          <div className="title p-3 text-center">
            <span className="logo">COMPLAINTS</span>
          </div>
          <div className="content p-3">
            {errorMessage}
            {authRedirect}
            <form onSubmit={submitHandler}>
              {form}
              <Button btnType="btn btn-success" type="submit">
                {isSignup ? "SIGNUP" : "SIGNIN"}
              </Button>
            </form>
          </div>
          <div className="border-top p-3 text-center">
            <p className="mb-2">
              forget password pelase <a className="font-italic">Click Here</a>
            </p>
            <p className="mb-0">
              Don't have any account
              <a
                className="font-italic text-primary"
                onClick={switchAuthModeHandler}
              >
                Click Here
              </a>{" "}
              to {isSignup ? "SIGNIN" : "SIGNUP"}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(auth);
