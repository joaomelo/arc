import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from '__cli/modules/auth';

export function RouteEntry ({ children, ...rest }) {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <Route {...rest}>
      { !isSignedIn ? children : <Redirect to="/" /> }
    </Route>
  );
}
