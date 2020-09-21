import React from 'react';
import { theme } from '__cli/core/design';
import { PageAuth } from '__cli/modules/users';

function App () {
  return (
    <div
      id="app"
      css={{
        height: '100%',
        backgroundColor: theme.colors.ligth,
        display: 'grid',
        gridTemplateRows: '40px 1fr'
      }}
    >
      <nav
        css={{
          backgroundColor: theme.colors.secondary,
          color: theme.colors.primary,
          fontSize: '2em',
          fontWeight: '700'
        }}
      >
        Arc
      </nav>
      <main
        css={{
          padding: 8
        }}
      >
        <PageAuth />
      </main>
    </div>

  );
}

export { App };
