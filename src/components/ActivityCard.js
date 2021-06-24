import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity, addToWishlist, isInWishlist, removeFromWishlist }) {
  const toggleWishlist = () => {
    if (isInWishlist(activity)) {
      removeFromWishlist(activity.uuid);
    } else {
      addToWishlist(activity);
    }
  };

  return (
    activity && (
      <div className='card__container'>
        <img className='card__img' src={activity.cover_image_url} alt={activity.title} />
        <div className='card__text'>
          <h2 className='card__title'>{activity.title}</h2>
          <p className='card__description'>{activity.description}</p>
        </div>
        <div className='card__details'>
          <button type='button' className='card__add'>
            Add to
            <i className='fas fa-shopping-cart'></i>
          </button>
          <div onClick={toggleWishlist} className='card__icon'>
            {isInWishlist(activity) ? (
              <i className='fas fa-star'></i>
            ) : (
              <i className='far fa-star'></i>
            )}
          </div>
          <span className='card__price'>
            <small>Price: </small>
            {activity.original_retail_price.formatted_value}
          </span>
        </div>
      </div>
    )
  );
}

export default ActivityCard;
