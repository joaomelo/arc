import styled from 'styled-components';
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
      <Button type="submit">Add</Button>
    </form>
  );
}

const Button = styled.button`
  background: 'blue'
`;
