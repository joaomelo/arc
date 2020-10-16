import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AUTH_STATUSES } from '__cli/modules/auth';

export function PrivateRoute ({ children, status, ...rest }) {
  const isSignedIn = status === AUTH_STATUSES.SIGNEDIN;

  return (
    <Route {...rest}>
      { isSignedIn ? children : <Redirect to="/auth" /> }
    </Route>
  );
}
