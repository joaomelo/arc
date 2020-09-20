import create from 'zustand';
import { signUp, signIn } from './sign';

const AUTH_STATUSES = {
  SIGNEDOUT: 'AUTH_STATUSES.SIGNEDOUT',
  SIGNEDIN: 'AUTH_STATUSES.SIGNEDIN'
};

const initialAuthState = {
  status: AUTH_STATUSES.SIGNEDOUT,
  token: null,
  id: null,
  email: null
};

const useAuthStore = create(set => ({
  ...initialAuthState,

  signIn: async (email, password) => {
    const userData = await signIn(email, password);
    set({ ...userData, status: AUTH_STATUSES.SIGNEDIN });
  },
  signUp: async (email, password) => {
    const userData = await signUp(email, password);
    set({ ...userData, status: AUTH_STATUSES.SIGNEDIN });
  },
  signOut: () => set({ ...initialAuthState }),

  updateEmail: () => {},
  updatePassword: () => {}
}));

export { AUTH_STATUSES, useAuthStore };
