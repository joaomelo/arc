import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { spaces, colors } from '__cli/core/design';
import { selectIsSignedIn, PageAuth } from '__cli/modules/auth';
import { PrivateRoute } from './private-route';

function AppMainView ({ isSignedIn }) {
  return (
    <main
      css={{
        backgroundColor: colors.light,
        padding: `${spaces.sp5} ${spaces.sp3} ${spaces.sp3}`
      }}
    >
      <PrivateRoute exact path="/" isSignedIn={isSignedIn}>
        <Redirect to="/arcs" />
      </PrivateRoute>
      <Route path="/auth">
        { isSignedIn ? <Redirect to="/" /> : <PageAuth /> }
      </Route>
      <PrivateRoute path="/arcs" isSignedIn={isSignedIn}>
            Arcs
      </PrivateRoute>
    </main>
  );
}

const mapState = state => ({ isSignedIn: selectIsSignedIn(state) });
export const AppMain = connect(mapState, null)(AppMainView);