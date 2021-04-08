import { useForm } from 'react-hook-form';

export function ArcAddView ({ onAdd }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <input
        name="arc"
        type="text"
        ref={register({ required: true })}
      />
      <button type="submit">Add</button>
    </form>
  );
}
