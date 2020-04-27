import React, { Component } from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';


const modal = props => {
  // shoudComponentUpdate(nextProps, nextState) {
  //   return nextProps.show !== props.show || nextProps.children !== props.children;
  //   // console.log('asdasd');
  // }
  // componentWillUpdate() {
  //   // console.log('[Modal] willUpdate');
  // }


  return (<Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className="Modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
    >
      {props.children}
    </div>
  </Aux>)
}


export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);