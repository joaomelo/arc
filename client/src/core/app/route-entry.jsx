import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useIsSignedIn } from '__cli/modules/users';

export function RouteEntry ({ children, ...rest }) {
  const isSignedIn = useIsSignedIn();

  return (
    <Route {...rest}>
      { !isSignedIn ? children : <Redirect to="/" /> }
    </Route>
  );
}
