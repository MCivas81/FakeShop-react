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
  activitiesPerPage,
  totalActivities,
  paginate,
  currentPage,
  goToPreviousPage,
  goToNextPage,
  pageLimit,
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
        activitiesPerPage={activitiesPerPage}
        totalActivities={totalActivities}
        paginate={paginate}
        currentPage={currentPage}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        pageLimit={pageLimit}
      />
    </div>
  );
}

export default Home;
