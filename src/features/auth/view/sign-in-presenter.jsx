import { signInCase } from '../cases';
import { SignInView } from './sign-in-view';

export function SignInPresenter ({ dependencies }) {
  const { authStore, identityProvider } = dependencies;
  const onSubmit = ({ email, password }) =>
    signInCase({ email, password }, { authStore, identityProvider });

  return (<SignInView onSubmit={onSubmit}/>);
}
