import React from 'react';
import { LoadingSpinner } from './loading-spinner';

function LoadingOverlay ({ isLoading }) {
  if (!isLoading) return null;
  return (
    <span
      css={{
        cursor: 'wait',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99
      }}
    >
      <LoadingSpinner />
    </span>
  );
};

export { LoadingOverlay };
