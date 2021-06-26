import React from 'react';
import './Pagination.css';

function Pagination({
  activitiesPerPage,
  totalActivities,
  paginate,
  currentPage,
  goToPreviousPage,
  goToNextPage,
  pageLimit,
}) {
  const pageNumbers = [];

  console.log(pageNumbers);

  for (let i = 1; i <= Math.ceil(totalActivities / activitiesPerPage); i++) {
    pageNumbers.push(i);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <nav>
      <ul className='pagination'>
        <button
          onClick={goToPreviousPage}
          className={`page__prev ${currentPage === 1 && 'disabled'}`}>
          prev
        </button>
        {getPaginationGroup().map((number, index) => (
          <li key={index} className='page__activities'>
            <button
              onClick={() => paginate(number)}
              className={`page__number ${currentPage === number && 'active'}`}>
              {number}
            </button>
          </li>
        ))}
        <button
          onClick={goToNextPage}
          className={`page__next ${currentPage === pageNumbers.length && 'disabled'}`}>
          next
        </button>
      </ul>
    </nav>
  );
}

export default Pagination;
