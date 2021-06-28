import React from 'react';
import ListItem from './ListItem';
import './Wishlist.css';

function Wishlist({ wishlist, removeFromWishlist }) {
  return (
    <div className='wishlist__container'>
      {wishlist.length <= 0 && <div className='wishlist__empty'>The wishlist is empty</div>}
      {wishlist.length > 0 &&
        wishlist.map((item) => {
          return (
            <li key={item.uuid}>
              <ListItem item={item} removeFromWishlist={removeFromWishlist} />
            </li>
          );
        })}
    </div>
  );
}

export default Wishlist;
