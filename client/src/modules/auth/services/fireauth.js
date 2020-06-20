import 'client/src/modules/auth/services/firebase/auth';
import { fireApp } from 'client/src/core/fireapp';
import { AuthMachine } from 'client/src/modules/auth/services/@joaomelo/fireauth-machine';

let authMachine;

function createService (onAuthChangeCallback) {
  if (!authMachine) {
    authMachine = new AuthMachine(fireApp.auth(), onAuthChangeCallback);
  }
  return authMachine;
};

export { createService };
