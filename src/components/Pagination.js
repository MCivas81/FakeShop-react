import React, { useState } from 'react';
import './Pagination.css';

function Pagination({
  pageLimit,
  totalActivities,
  paginate,
  currentPage,
  goToPreviousPage,
  goToNextPage,
}) {
  // Page grouping
  const [pageGroupLimit] = useState(4);

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageGroupLimit) * pageGroupLimit;
    return new Array(pageGroupLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <nav>
      <ul className='pagination'>
        <button
          onClick={goToPreviousPage}
          className={`page__prev ${currentPage === 1 && 'disabled'}`}>
          prev
        </button>
        {getPaginationGroup().map((pageNumber, index) => (
          <li key={index} className='page__activities'>
            <button
              onClick={() => paginate(pageNumber)}
              className={`page__number ${currentPage === pageNumber && 'active'}`}>
              {pageNumber}
            </button>
          </li>
        ))}
        <button
          onClick={goToNextPage}
          className={`page__next ${currentPage === totalActivities / pageLimit && 'disabled'}`}>
          next
        </button>
      </ul>
    </nav>
  );
}

export default Pagination;
