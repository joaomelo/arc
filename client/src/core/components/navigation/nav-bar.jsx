import React from 'react';
import { theme } from '__cli/core/design';
import { NavLogo } from './nav-logo';

function NavBar () {
  return (
    <nav
      css={{
        backgroundColor: theme.colors.secondary,
        color: theme.colors.primary,
        paddingLeft: theme.spacing.s3,
        paddingRight: theme.spacing.s3
      }}
    >
      <NavLogo />
    </nav>
  );
}

export { NavBar };
