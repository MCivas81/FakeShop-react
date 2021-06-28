import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../services/utils';
import './HeaderCart.css';

function HeaderCart({ cartSize, cartTotal }) {
  return (
    <div className='headercart__container'>
      {!!cartSize && <span className='headercart__price'>{formatPrice(cartTotal)}</span>}
      <Link to='/cart' className='headercart__icon'>
        <i className='fas fa-shopping-cart'></i>
      </Link>
      {!!cartSize && <span className='headercart__qty'>{cartSize}</span>}
    </div>
  );
}

export default HeaderCart;
