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
    <main>
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
    </main>
  );
}

export default Home;
