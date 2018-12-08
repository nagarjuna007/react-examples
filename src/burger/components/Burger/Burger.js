import React, { Component } from 'react';
import BurgerIngredent from './BurgerIngredent/BurgerIngredent';
import './Burger.css';
import {withRouter} from 'react-router-dom';

const burger = (props) => {
  // const transformedIngredients = Object.keys(props.ingredients).map(
  //   igKey => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />
  //     });
  //   }
  // ).reduce((arr,el)=>{
  //   return arr.concat(el);
  // },[]);

  let transformedIngredients = Object.keys(props.ingredients).map(
    igKey => {
      var ele = [];
      for (var i = 0; i < props.ingredients[igKey]; i++) {
        ele.push(<BurgerIngredent key={igKey + i} type={igKey} />)
      } 
      return ele;
    }
  ).reduce((arr, el) => {
    return arr.concat(el);
  }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  console.log(transformedIngredients);
  return (
    <div className="Burger">
      <BurgerIngredent type="bread-top" />
      {transformedIngredients}
      <BurgerIngredent type="bread-bottom" />
    </div>
  );
}

export default burger;