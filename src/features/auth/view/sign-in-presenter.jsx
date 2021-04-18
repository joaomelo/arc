import { useCase } from '../../../app/use-case';
import { createErrorReports } from '../../../app/error';
import { signInCase } from '../cases';
import { SignInView } from './sign-in-view';

export function SignInPresenter ({ dependencies }) {
  const { run, isRunning, error } = useCase(signInCase, dependencies);

  const reports = createErrorReports(['AUTH/EMAIL_INVALID', 'AUTH/PASSWORD_INVALID'], error);
  const [formError, emailError, passwordError] = reports;

  return (
    <SignInView
      onSubmit={run}
      isLoading={isRunning}
      errors={{ formError, emailError, passwordError }}
    />
  );
}
