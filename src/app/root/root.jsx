import { BrowserRouter as Router, Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { useGetter } from '../hooks';
import { SignInPresenter } from '../../features/auth';
import { ArcsPresenter } from '../../features/arcs';

export function Root ({ dependencies }) {
  return <Pages dependencies={dependencies}/>;
}

export function Pages ({ dependencies }) {
  const { authStore } = dependencies;
  const isSignedIn = useGetter(authStore, 'isSignedIn');

  return (
    <Router >
      <Switch>
        <Route path="/out">
          { isSignedIn && <Redirect to="/in" /> }
          <OutPages dependencies={dependencies} />
        </Route>
        <Route path="/in">
          { !isSignedIn && <Redirect to="/out" /> }
          <InPages dependencies={dependencies} />
        </Route>
        <Redirect to="/out" />
      </Switch>
    </Router>
  );
}

function OutPages ({ dependencies }) {
  const match = useRouteMatch();
  const path = match.path;
  const defaultOutRoute = `${path}/sign-in`;

  return (
    <Switch>
      <Route path={`${path}/sign-in`}>
        <SignInPresenter dependencies={dependencies}/>
      </Route>
      <Redirect to={defaultOutRoute} />
    </Switch>
  );
}

function InPages ({ dependencies }) {
  const match = useRouteMatch();
  const path = match.path;
  const defaultInRoute = `${path}/arcs`;

  return (
    <Switch>
      <Route path={`${path}/arcs`}>
        <ArcsPresenter dependencies={dependencies}/>
      </Route>
      <Redirect to={defaultInRoute} />
    </Switch>
  );
}
