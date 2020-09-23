import React from 'react';
import { theme } from '__cli/core/design';
import { NavLogo } from './nav-logo';
import { NavLinks } from './nav-links';

function NavBar () {
  return (
    <nav
      css={{
        backgroundColor: theme.colors.secondary,
        color: theme.colors.primary,
        paddingLeft: theme.space.s3,
        paddingRight: theme.space.s3,
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        columnGap: theme.space.s3
      }}
    >
      <NavLogo css={{ gridColumn: '1 / 2' }} />
      <NavLinks css={{ gridColumn: '3 / 4' }} />
    </nav>
  );
}

export { NavBar };
