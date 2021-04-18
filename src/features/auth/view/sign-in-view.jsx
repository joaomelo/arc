import { Loading, usePayload } from '../../../app/components';

export function SignInView ({ onSubmit, isLoading, errors }) {
  const { payload, updatePayload } = usePayload({ email: '', password: '' });
  const { formError, emailError, passwordError } = errors;

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(payload);
  };

  return (
    <div>
      <Loading isLoading={isLoading} />
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputEmail">Email address</label>
          <input
            id="inputEmail"
            value={payload.email}
            onChange={e => updatePayload({ email: e.target.value })}
          />
          <p>{emailError}</p>
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input
            id="inputPassword"
            type="password"
            value={payload.password}
            onChange={e => updatePayload({ password: e.target.value })}
          />
          <p>{passwordError}</p>
        </div>

        <p>{formError}</p>

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
