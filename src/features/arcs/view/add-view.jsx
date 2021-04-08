import { useForm } from 'react-hook-form';

export function AddView ({ onAdd }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <input
        name="name"
        type="text"
        ref={register({ required: true })}
      />
      <button type="submit">Add</button>
    </form>
  );
}
