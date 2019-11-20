import React, { Component, useEffect, Suspense } from "react";
import { Link, Route, Switch, withRouter, Redirect } from "react-router-dom";
import { render } from "react-dom";
import { connect } from "react-redux";
import asyncComponent from "./hoc/asyncComponent";
import * as actions from "./store/actions/index";
import "./style.scss";

const Auth = asyncComponent(() => {
  return import("./containers/auth/Auth.js");
});
const Home = asyncComponent(() => {
  return import("./containers/home/Home.js");
});

const app = props => {
  let routes = (
    <Switch>
      <Route path="/auth" render={props => <Auth {...props} />} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <Suspense fallback={<p>Loading...</p>}> {routes}</Suspense>;
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(app)
);
