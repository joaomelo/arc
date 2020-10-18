import React from 'react';
import { spaces, colors } from '__cli/core/design';
import { NavLogo } from './nav-logo';

function NavBar ({ children, ...rest }) {
  const linksCount = React.Children.count(children);

  return (
    <nav
      css={{
        backgroundColor: colors.secondary,
        color: colors.primary,
        paddingLeft: spaces.breathable,
        paddingRight: spaces.breathable,
        display: 'grid',
        gridTemplateColumns: `1fr ${linksCount > 0 ? `repeat(${linksCount}, max-content)}` : ''}`,
        columnGap: spaces.breathable,
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
