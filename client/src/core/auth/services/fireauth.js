import '__cli/core/auth/services/firebase/auth';
import { fireApp } from '__cli/core/auth/services/client/src/core/fireapp';
import { AuthMachine } from '__cli/core/auth/services/@joaomelo/fireauth-machine';

let authMachine;

function createService (onAuthChangeCallback) {
  if (!authMachine) {
    authMachine = new AuthMachine(fireApp.auth(), onAuthChangeCallback);
  }
  return authMachine;
};

export { createService };
