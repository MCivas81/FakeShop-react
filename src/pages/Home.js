import React from 'react';
import ActivitiesList from '../components/ActivitiesList';

function Home({
  activities,
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  isInCart,
}) {
  return (
    <div>
      <ActivitiesList
        activities={activities}
        isInWishlist={isInWishlist}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={isInCart}
      />
    </div>
  );
}

export default Home;
