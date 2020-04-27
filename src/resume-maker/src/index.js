import React, { Component } from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./style.scss";
import App from "./app";
import authReducer from "./store/reducers/auth";
import messageReducer from "./store/reducers/message";
import editProfileReducer from "./store/reducers/editProfile";
import profileInfoReducer from "./store/reducers/profileDetails";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const composeEnhancers =
  process.env.NODE_ENV === window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

const rootReducer = combineReducers({
  auth: authReducer,
  globalMessage: messageReducer,
  profileInfo: profileInfoReducer,
  editProfile: editProfileReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
