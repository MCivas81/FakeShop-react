import React from 'react';
import './ListItem.css';

function ListItem({ item, removeFromWishlist }) {
  return (
    <div className='listitem__wrapper'>
      <img className='listitem__img' src={item.cover_image_url} alt={item.title} />
      <div className='listitem__description'>
        <p>{item.title}</p>
      </div>
      <div className='listitem__details'>
        <span className='listitem__price'>{item.retail_price.formatted_value}</span>
        <div className='listitem__icon'>
          <i
            onClick={() => removeFromWishlist(item.uuid)}
            className='fas fa-trash-alt'
            title='Delete Item'></i>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
