import React from 'react';
import './Cart.css';
import CartActivity from '../components/CartActivity';

function Cart({ activitiesInCart, totalPrice, removeFromCart, setProductQuantity }) {
  return (
    <div className='cart'>
      <div className='cart__content'>
        {activitiesInCart.length > 0 ? (
          activitiesInCart.map((activity) => (
            <CartActivity
              key={activity.uuid}
              activity={activity}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          ))
        ) : (
          <p className='cart__empty'>The cart is empty</p>
        )}
      </div>
      <footer className='cart__footer'>Total: € {totalPrice.toFixed(2)}</footer>
    </div>
  );
}

export default Cart;
