import CartContext from './cart-context';

const CartProvider = (props) => {
  // Here we add all the logic for managing the Context,
  // so that no other Component needs to deal with that.
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // We can now wrap any component, that needs access to this Context with <CartProvider>
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
