import { useCase } from '../../../app/use-case';
import { signInCase } from '../cases';
import { SignInView } from './sign-in-view';

export function SignInPresenter ({ dependencies }) {
  const { run, isRunning, error } = useCase(signInCase, dependencies);

  return (
    <SignInView
      onSubmit={run}
      isLoading={isRunning}
      error={error}
    />
  );
}
