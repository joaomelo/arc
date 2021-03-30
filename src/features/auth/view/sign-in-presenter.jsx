import { signInCase } from '../domain';
import { SignInView } from './sign-in-view';

export function SignInPresenter ({ dependencies }) {
  const { stores, identityProvider } = dependencies;
  const { authStore } = stores;
  const onSubmit = ({ email, password }) =>
    signInCase({ email, password }, { authStore, identityProvider });

  return (<SignInView onSubmit={onSubmit}/>);
}
