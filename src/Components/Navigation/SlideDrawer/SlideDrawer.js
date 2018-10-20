import React, { Component } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
// import classes from './slideDrawer.css';
import './slideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
  let attachedClasses = "SlideDrawer Close";
  //let attachedClasses = [classes.SlideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = "SlideDrawer Open";
    //attachedClasses = [classes.SlideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
};

export default sideDrawer;