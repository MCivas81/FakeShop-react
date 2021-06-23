import React from 'react';
import './ModalSidebar.css';

function ModalSidebar({ isModalOpen, closeModal, children }) {
  return (
    <div className={`ModalSidebar ${isModalOpen ? `is-open` : ''}`}>
      <div className='ModalSidebar__overlay' onClick={closeModal}></div>
      <div className='ModalSidebar__body'>
        <header className='ModalSidebar__header'>
          <button className='ModalSidebar__close' onClick={closeModal}>
            X
          </button>
          <h2 className='ModalSidebar__title'>WISHLIST (99)</h2>
          <button type='button' className='ModalSidebar__btn'>
            Clear All
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}

export default ModalSidebar;
