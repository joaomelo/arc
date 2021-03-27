import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPresenter } from '../../../features/auth';

export function Root ({ dependencies }) {
  return (
    <Router >
      <Switch>
        <Route path="/sign-in">
          <SignInPresenter dependencies={dependencies}/>
        </Route>
      </Switch>
    </Router>
  );
}
