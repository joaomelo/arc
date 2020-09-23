import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from '__cli/core/design';
import { NavBar } from '__cli/core/components';
import { PageAuth } from '__cli/modules/users';

function App () {
  return (
    <Router>
      <div
        id="app"
        css={{
          height: '100%',
          backgroundColor: theme.colors.ligth,
          display: 'grid',
          gridTemplateRows: '40px 1fr'
        }}
      >
        <NavBar />
        <main
          css={{
            padding: theme.space.s3
          }}
        >
          <PageAuth />
        </main>
      </div>
    </Router>
  );
}

export { App };
