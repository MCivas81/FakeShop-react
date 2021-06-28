import React, { useState } from 'react';
import './ErrorBanner.css';

function ErrorBanner({ retry }) {
  const [isErrorOpen, setIsErrorOpen] = useState(true);

  return (
    isErrorOpen && (
      <div className='errorbanner'>
        <span className='errorbanner__message'>API call response error!</span>
        <button type='button' className='errorbanner__retry' onClick={retry}>
          Retry
        </button>
        <button type='button' className='errorbanner__close' onClick={() => setIsErrorOpen(false)}>
          X
        </button>
      </div>
    )
  );
}

export default ErrorBanner;
