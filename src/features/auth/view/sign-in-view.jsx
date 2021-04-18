import { usePayload } from '../../../app/forms';
import { useReportError } from '../../../app/error';

export function SignInView ({ onSubmit, isLoading, error }) {
  const { payload, updatePayload } = usePayload({ email: '', password: '' });
  const reportError = useReportError();

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(payload);
  };

  return (
    <div>
      <h2>Sign in</h2>
      <p>{isLoading && 'Loading...'}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputEmail">Email address</label>
          <input
            id="inputEmail"
            value={payload.email}
            onChange={e => updatePayload({ email: e.target.value })}
          />
          <p>{reportError(error, ['AUTH/EMAIL_INVALID'])}</p>
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input
            id="inputPassword"
            type="password"
            value={payload.password}
            onChange={e => updatePayload({ password: e.target.value })}

          />
          <p>{reportError(error, ['AUTH/PASSWORD_INVALID'])}</p>
        </div>

        <p>{reportError(error)}</p>

        <button
          id="buttonSignIn"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
