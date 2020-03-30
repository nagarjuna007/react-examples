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
import Message from "./components/message";

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
  let messageInfoValue = props.onMessages;

  useEffect(() => {
    props.onTryAutoSignup();
    messageInfoValue = props.onMessages;
  }, []);

  // componentDidMount() {
  //   this.props.onTryAutoSignup();
  // }

  let routes = (
    <Switch>
      <Route path="/" exact render={props => <OffersList {...props} />} />
      <Route path="/auth" exact render={props => <Auth {...props} />} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact render={props => <OffersList {...props} />} />
        <Route path="/auth" exact render={props => <Auth {...props} />} />
        <Route path="/profile" render={props => <Profile {...props} />} />
        <Route
          path="/postedOffersList"
          exact
          render={props => <PostedOffersList {...props} />}
        />
        <Route
          path="/addOffer"
          exact
          render={props => <AddOffer {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      {routes}
      <Message messageinfo={messageInfoValue} />
    </Suspense>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    onMessages: state.auth.message,
    reDirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(app)
);
