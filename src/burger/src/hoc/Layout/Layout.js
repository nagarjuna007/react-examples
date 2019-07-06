import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SlideDrawer/SlideDrawer';

const layout = props => {
  // state = {
  //   showSideDrawer: false
  // }

  // sideDrawerClosedHandler = () => {
  //   this.setState({ showSideDrawer: false });
  // }

  // sideDrawerToggleHandler = () => {
  //   this.setState((prevState) => {
  //     return { showSideDrawer: !prevState.showSideDrawer };
  //   });
  // }

  // <Aux>
  //     <Toolbar
  //       isAuth={this.props.isAuthenticated}
  //       drawerToggleClicked={this.sideDrawerToggleHandler} />
  //     <SideDrawer
  //       isAuth={this.props.isAuthenticated}
  //       open={this.state.showSideDrawer}
  //       closed={this.sideDrawerClosedHandler} />
  //     <main className="container pt-5 mt-5">
  //       {this.props.children}
  //     </main>
  //   </Aux>

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  }

  return (
    <Aux>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler} />
      <main className="container pt-5 mt-5">
        {props.children}
      </main>
    </Aux>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(layout);