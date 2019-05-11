import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredent/BurgerIngredent';

const burger = (props) => {
  // console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // return [...Array(props.ingredients[igKey])].map((_, i) => {
      //   return <BurgerIngredient key={igKey + i} type={igKey} />;
      // });
      var ele = [];
      for (var i = 0; i < props.ingredients[igKey]; i++) {
        ele.push(<BurgerIngredient key={igKey + i} type={igKey} />)
      }
      return ele;
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;