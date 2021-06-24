import React from 'react';
import './Wishlist.css';

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div className='wishlist__container'>
      {wishlist.length <= 0 && <div className='wishlist__empty'>The wishlist is empty</div>}
      {wishlist.length > 0 &&
        wishlist.map((item) => {
          return (
            <li>
              <div removeFromWishlist={removeFromWishlist}>{item.title}</div>
            </li>
          );
        })}
    </div>
  );
}

export default Wishlist;
