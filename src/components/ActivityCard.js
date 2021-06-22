import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity }) {
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
          <div className='card__icon'>
            <i className='far fa-star'></i>
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
