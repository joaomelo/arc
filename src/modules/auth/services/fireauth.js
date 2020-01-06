import 'firebase/auth';
import { fireApp } from '@/core/fireapp';

const service = fireApp.auth();

function igniteService (callback) {
  service.onAuthStateChanged(user => callback(user));
};

async function login (email, password) {
  let result;

  try {
    result = await service.signInWithEmailAndPassword(email, password);
  } catch (e) {
    result = e.message;
  };

  return result;
}

function logout () {
  return service.signOut();
};

export { igniteService, login, logout };
