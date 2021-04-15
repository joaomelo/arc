import { useForm } from 'react-hook-form';

export function SignInView ({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="inputEmail">Email address</label>
          <input
            id="inputEmail"
            name="email"
            ref={register()}
            autoComplete="email"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="inputPassword">Password</label>
          <input
            id="inputPassword"
            name="password"
            ref={register()}
            type="password"
            autoComplete="current-password"
            placeholder="Password"
          />
        </div>

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
