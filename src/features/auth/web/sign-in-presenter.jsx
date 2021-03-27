import { signInCase } from '../domain';
import { SignInView } from './sign-in-view';

export function SignInPresenter ({ dependencies }) {
  const { store, identityProvider } = dependencies;
  const { authStore } = store;
  const onSubmit = ({ email, password }) =>
    signInCase({ email, password }, { authStore, identityProvider });

  return (<SignInView onSubmit={onSubmit}/>);
}
