import { useForm } from 'react-hook-form';

export function SignInView ({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input name="email" ref={register({ required: true })} />
      </div>
      <div>
        <label>Password:</label>
        <input name="password" ref={register({ required: true })} />
      </div>
      <input type="submit" />
    </form>
  );
}
