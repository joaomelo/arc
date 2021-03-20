import { interpret } from 'xstate';
import { createAuthStoreMachine } from './machine';

export function createAuthStore () {
  const authStateMachine = createAuthStoreMachine();
  const authStore = interpret(authStateMachine);
  authStore.start();

  return authStore;
}
