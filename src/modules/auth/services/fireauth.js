import 'firebase/auth';
import { fireApp } from '@/core/fireapp';

const service = fireApp.auth();

function igniteService (callback) {
  service.onAuthStateChanged(user => callback(user));
};

async function fireLogin (email, password) {
  let result = '';

  try {
    await service.signInWithEmailAndPassword(email, password);
  } catch (e) {
    result = e.message;
  };

  return result;
}

function fireLogout () {
  return service.signOut();
};

export { igniteService, fireLogin, fireLogout };
