import React, { useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = (props) => {
  // Now this component will be re-evaluated by React whenever
  // the Context changes, i.e. we update it in the CartProvider Component
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowCartClicked}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
