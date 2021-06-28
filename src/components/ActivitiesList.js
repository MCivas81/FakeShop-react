import React from 'react';
import ActivityCard from './ActivityCard';
import './ActivitiesList.css';

function ActivitiesList({
  activities,
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  isInCart,
}) {
  return (
    <div className='activities__container'>
      <div className='activities__wrapper'>
        {activities.map((activity) => {
          return (
            <li key={activity.uuid}>
              {
                <ActivityCard
                  activity={activity}
                  addToWishlist={addToWishlist}
                  isInWishlist={isInWishlist}
                  removeFromWishlist={removeFromWishlist}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  isInCart={isInCart}
                />
              }
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default ActivitiesList;
