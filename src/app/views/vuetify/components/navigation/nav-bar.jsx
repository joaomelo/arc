import React from 'react';
import { spaces, colors } from '@/shared/design';
import { NavLogo } from './nav-logo';
import { NavLinks } from './nav-links';

function NavBar ({ children, ...rest }) {
  return (
    <nav
      css={{
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr',
        columnGap: spaces.breathable,
        padding: `0 ${spaces.breathable}`,
        backgroundColor: colors.secondary,
        color: colors.primary
      }}
      {...rest}
    >
      <NavLogo />
      <NavLinks>
        { children }
      </NavLinks>
    </nav>
  );
}

export { NavBar };
