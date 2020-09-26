import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { theme } from '__cli/core/design';
import { useAuthStore, AUTH_STATUSES, PageAuth } from '__cli/modules/users';
import { AppNav } from './app-nav';
import { PrivateRoute } from './private-route';

function App () {
  const status = useAuthStore(state => state.status);

  return (
    <Router>
      <div
        id="app"
        css={{
          height: '100%',
          backgroundColor: theme.colors.ligth,
          display: 'grid',
          gridTemplateRows: 'max-content 1fr'
        }}
      >
        <AppNav />
        <main
          css={{
            padding: theme.space.s3
          }}
        >
          <PrivateRoute exact path="/">
            <Redirect to="/arcs" />
          </PrivateRoute>
          <Route path="/auth">
            {
              status === AUTH_STATUSES.SIGNEDIN
                ? <Redirect to="/" />
                : <PageAuth />
            }
          </Route>
          <PrivateRoute path="/arcs">
            Arcs
          </PrivateRoute>
        </main>
      </div>
    </Router>
  );
}

export { App };
