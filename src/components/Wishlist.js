import React from 'react';
import './Wishlist.css';
import ListItem from './ListItem';

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
