import React from 'react';
import { spaces, colors } from '__cli/core/design';
import { NavLogo } from './nav-logo';

function NavBar ({ children, linksCount, ...rest }) {
  return (
    <nav
      css={{
        backgroundColor: colors.secondary,
        color: colors.primary,
        paddingLeft: spaces.sp3,
        paddingRight: spaces.sp3,
        display: 'grid',
        gridTemplateColumns: `1fr ${linksCount > 0 ? `repeat(${linksCount}, max-content)}` : ''}`,
        columnGap: spaces.sp3,
        alignItems: 'center',
        ...rest
      }}
    >
      <NavLogo />
      { children }
    </nav>
  );
}

export { NavBar };
