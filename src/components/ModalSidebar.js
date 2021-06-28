import React from 'react';
import './ModalSidebar.css';

function ModalSidebar({ isModalOpen, closeModal, clearWishlist, wishlist, children }) {
  return (
    <div className={`modalsidebar ${isModalOpen ? `is-open` : ''}`}>
      <div className='modalsidebar__overlay' onClick={closeModal}></div>
      <div className='modalsidebar__body'>
        <header className='modalsidebar__header'>
          <button className='modalsidebar__close' onClick={closeModal}>
            X
          </button>
          <h2 className='modalsidebar__title'>WISHLIST ({wishlist.length})</h2>
          {wishlist.length > 0 && (
            <button onClick={() => clearWishlist()} type='button' className='modalsidebar__btn'>
              Clear All
            </button>
          )}
        </header>
        {children}
      </div>
    </div>
  );
}

export default ModalSidebar;
