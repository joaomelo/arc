import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { spaces, colors } from '__cli/core/design';
import { AUTH_STATUSES, PageAuth } from '__cli/modules/auth';
import { PrivateRoute } from './private-route';

function AppMainPresenter ({ status }) {
  return (
    <main
      css={{
        backgroundColor: colors.light,
        padding: `${spaces.sp5} ${spaces.sp3} ${spaces.sp3}`
      }}
    >
      <PrivateRoute exact path="/" status={status}>
        <Redirect to="/arcs" />
      </PrivateRoute>
      <Route path="/auth">
        {
          status === AUTH_STATUSES.SIGNEDIN
            ? <Redirect to="/" />
            : <PageAuth />
        }
      </Route>
      <PrivateRoute path="/arcs" status={status}>
            Arcs
      </PrivateRoute>
    </main>
  );
}

const mapState = state => ({ status: state.auth.status });
export const AppMain = connect(mapState, null)(AppMainPresenter);
