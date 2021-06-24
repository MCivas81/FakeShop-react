import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ wishlist, onWishlistClick }) {
  return (
    <header className='header__container'>
      <Link to='/' className='header__text'>
        <h2>
          JAG<span>AA</span>D
        </h2>
      </Link>
      <div className='header__links'>
        <button onClick={onWishlistClick} type='button' className='header__btn'>
          <i className='fas fa-star'></i>({wishlist.length})
        </button>
      </div>
    </header>
  );
}

export default Header;
