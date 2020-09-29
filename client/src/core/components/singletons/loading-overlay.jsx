import create from 'zustand';
import React from 'react';
import { LoadingSpinner } from './loading-spinner';

const useLoading = create(set => ({
  isLoading: false,
  toggleLoading: () => set(state => ({ isLoading: !state.isLoading }))
}));

function LoadingOverlay () {
  const isLoading = useLoading(state => state.isLoading);

  return (
    <div
      css={{
        cursor: 'wait',
        display: isLoading ? 'flex' : 'none',
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
    </div>
  );
};

export { useLoading, LoadingOverlay };
