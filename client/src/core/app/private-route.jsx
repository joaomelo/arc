import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthStore, AUTH_STATUSES } from '__cli/modules/users';

function PrivateRoute ({ children, ...rest }) {
  const status = useAuthStore(state => state.status);
  const isSignedIn = status === AUTH_STATUSES.SIGNEDIN;

  return (
    <Route {...rest}>
      { isSignedIn ? children : <Redirect to="/auth" /> }
    </Route>
  );
}

export { PrivateRoute };
