import React, { Component } from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SlideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo />
    <nav className="DesktopOnly"><NavigationItems isAuthenticated={props.isAuth} /></nav>
  </header>
);

export default toolbar;