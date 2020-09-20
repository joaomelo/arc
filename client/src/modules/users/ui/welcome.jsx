import React from 'react';
import { useAuthStore } from '../domain';

function Welcome ({ user }) {
  const signOut = useAuthStore(state => state.signOut);

  return (
    <>
      <p>Welcome {user}</p>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}

export { Welcome };
