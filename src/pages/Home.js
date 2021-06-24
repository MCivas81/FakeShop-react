import React from 'react';
import ActivitiesList from '../components/ActivitiesList';

function Home({ activities, isInWishlist, addToWishlist, removeFromWishlist }) {
  return (
    <div>
      <ActivitiesList
        activities={activities}
        isInWishlist={isInWishlist}
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist}
      />
    </div>
  );
}

export default Home;
