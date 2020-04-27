import axios from "axios";
import * as actionTypes from "./actionTypes";
import * as actions from "./index";

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = "";
    if (isSignup) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCR3ByaXb-AUYojWDRMK48HBWz92xuzC6M";
    } else {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCR3ByaXb-AUYojWDRMK48HBWz92xuzC6M";
    }
    axios
      .post(url, authData)
      .then(response => {
       // console.log(response);
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        localStorage.setItem("email", response.data.email);
        dispatch(actions.message("Login Success.."));
        dispatch(
          authSuccess(
            response.data.localId,
            response.data.idToken,
            response.data.refreshToken,
            response.data.expiresIn,
            response.data.email
          )
        );
      })
      .catch(error => {
        coknsole.log(error);
        dispatch(authFail());
      });
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (
  localId,
  idToken,
  refreshToken,
  expiresIn,
  email
) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    localId: localId,
    idToken: idToken,
    refreshToken: refreshToken,
    expiresIn: expiresIn,
    email: email
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
  k;
};

export const logout = () => {
  return dispatch => {
    dispatch(actions.message("Successfully Logout.."));
    dispatch(logoutFull());
  };
};

export const logoutFull = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  localStorage.removeItem("email");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        const email = localStorage.getItem("email");
        dispatch(authSuccess(token, userId, "", "", email));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};
