import React from 'react';
import ActivitiesList from '../components/ActivitiesList';
import Pagination from '../components/Pagination';

function Home({
  activities,
  isInWishlist,
  addToWishlist,
  removeFromWishlist,
  addToCart,
  removeFromCart,
  isInCart,
  pageLimit,
  totalActivities,
  paginate,
  currentPage,
  goToPreviousPage,
  goToNextPage,
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
      <Pagination
        pageLimit={pageLimit}
        totalActivities={totalActivities}
        paginate={paginate}
        currentPage={currentPage}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
}

export default Home;
