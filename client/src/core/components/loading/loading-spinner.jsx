import React from 'react';
import { sizes, colors } from '__cli/core/design';

function LoadingSpinner () {
  const { small, biggest } = sizes;
  const { secondary, primary } = colors;

  return (
    <div
      css={{
        position: 999,
        borderRadius: '50%',
        border: `${small} solid ${secondary}`,
        borderTop: `${small} solid ${primary}`,
        width: biggest,
        height: biggest,
        animation: 'spin 2s linear infinite',
        '@keyframes spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }}
    />
  );
}

export { LoadingSpinner };
