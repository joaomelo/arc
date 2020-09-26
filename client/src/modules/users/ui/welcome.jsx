import React from 'react';
import { useAuthStore } from '../domain';

function Welcome ({ user }) {
  const signOut = useAuthStore(state => state.signOut);

  return (
    <div>
      <p>Welcome {user}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export { Welcome };
