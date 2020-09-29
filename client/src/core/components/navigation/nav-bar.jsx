import React from 'react';
import { theme, colors } from '__cli/core/design';
import { NavLogo } from './nav-logo';

function NavBar ({ children, linksCount, ...rest }) {
  return (
    <nav
      css={{
        backgroundColor: colors.secondary,
        color: colors.primary,
        paddingLeft: theme.space.s3,
        paddingRight: theme.space.s3,
        display: 'grid',
        gridTemplateColumns: `1fr ${linksCount > 0 ? `repeat(${linksCount}, max-content)}` : ''}`,
        columnGap: theme.space.s3,
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
