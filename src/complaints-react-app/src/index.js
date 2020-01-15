import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import authReducer from "./store/reducers/auth";
import addComplaintReducer from "./store/reducers/addComplaint";
import viewComplaintReducer from "./store/reducers/viewComplaint";
import "./style.scss";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
// const composeEnhancers =
//   process.env.NODE_ENV === window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f;

const rootReducer = combineReducers({
  auth: authReducer,
  addComplaint: addComplaintReducer,
  viewComplaint: viewComplaintReducer
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
