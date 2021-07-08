import React from 'react';
import { Link } from 'react-router-dom';
import HeaderCart from './HeaderCart';
import './Header.css';

function Header({ wishlist, onWishlistClick, cartSize, cartTotal }) {
  return (
    <header className='header__container'>
      <Link to='/' className='header__text'>
        <h2>
          Fake<span>Shop</span>
        </h2>
      </Link>
      <div className='header__links'>
        <button onClick={onWishlistClick} type='button' className='header__btn'>
          <i className='fas fa-star'></i>({wishlist.length})
        </button>
        <HeaderCart cartSize={cartSize} cartTotal={cartTotal} />
      </div>
    </header>
  );
}

export default Header;
