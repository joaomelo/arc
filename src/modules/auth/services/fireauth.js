import 'firebase/auth';
import { fireApp } from '@src/core/fireapp';
import { AuthMachine } from '@joaomelo/fireauth-machine';

let authMachine;

function createService (onAuthChangeCallback) {
  if (!authMachine) {
    authMachine = new AuthMachine(fireApp.auth(), onAuthChangeCallback);
  }
  return authMachine;
};

export { createService };
