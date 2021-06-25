import React from 'react';
import './CartActivity.css';

function CartActivity({ activity, removeFromCart, setProductQuantity }) {
  const increment = () => setProductQuantity(activity.uuid, activity.quantity + 1);
  const decrement = () => setProductQuantity(activity.uuid, activity.quantity - 1);
  const remove = () => removeFromCart(activity.uuid);
  return (
    <div className='cartactivity__container'>
      <img className='cartactivity__image' src={activity.cover_image_url} alt={activity.title} />
      <div className='cartactivity__body'>
        <h3 className='cartactivity__title'>{activity.title}</h3>
        <div className='cartactivity__quantity'>
          <button onClick={decrement} disabled={activity.quantity === 1}>
            -
          </button>
          <span>{activity.quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <p className='cartactivity__price'>€ {activity.original_retail_price.value.toFixed(2)}</p>
        <button className='cartactivity__remove' onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartActivity;
