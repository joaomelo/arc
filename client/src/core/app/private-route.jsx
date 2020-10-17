import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute ({ children, isSignedIn, ...rest }) {
  return (
    <Route {...rest}>
      { isSignedIn ? children : <Redirect to="/auth" /> }
    </Route>
  );
}
