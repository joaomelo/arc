import React from 'react';
import { spaces } from '__cli/core/design';

function NavLinks ({ children }) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'flex-end',
        '> *': {
          marginRight: spaces.normal
        }
      }}
    >
      { children }
    </div>
  );
}

export { NavLinks };
