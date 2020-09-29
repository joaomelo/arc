import React from 'react';
import { sizes, colors } from '__cli/core/design';

function LoadingSpinner () {
  const { sz1, sz6 } = sizes;
  const { secondary, primary } = colors;

  return (
    <div
      css={{
        position: 999,
        borderRadius: '50%',
        border: `${sz1} solid ${secondary}`,
        borderTop: `${sz1} solid ${primary}`,
        width: sz6,
        height: sz6,
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
