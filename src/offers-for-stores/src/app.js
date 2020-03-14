import React, { Component, useEffect, Suspense } from "react";
import {
  Link,
  Route,
  Switch,
  withRouter,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import { render } from "react-dom";
import { connect } from "react-redux";
import asyncComponent from "./hoc/asyncComponent";
import * as actions from "./store/actions/index";
import Header from "./components/header";

const AddOffer = asyncComponent(() => {
  return import("./containers/admin/addOffer.js");
});
const Auth = asyncComponent(() => {
  return import("./containers/auth.js");
});
const OffersList = asyncComponent(() => {
  return import("./containers/user/offersList.js");
});
const PostedOffersList = asyncComponent(() => {
  return import("./containers/admin/postedOffersList.js");
});
const Profile = asyncComponent(() => {
  return import("./containers/profile.js");
});

const app = props => {
  let routes = (
    <Switch>
      <Route path="/" exact render={props => <OffersList {...props} />} />
      <Route path="/auth" exact render={props => <Auth {...props} />} />
      <Route path="/profile" exact render={props => <Profile {...props} />} />
      <Route
        exact
        path="/postedOffersList"
        render={props => <PostedOffersList {...props} />}
      />
      <Route path="/addOffer" exact render={props => <AddOffer {...props} />} />
      <Redirect exact to="/" />
    </Switch>
  );

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <Router>{routes}</Router>
    </Suspense>
  );
};

const mapStateToProps = state => {
  return {};
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
