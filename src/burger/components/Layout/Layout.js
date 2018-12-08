import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SlideDrawer from '../Navigation/SlideDrawer/SlideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SlideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className="mt-5 pt-5">
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;