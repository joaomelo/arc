import { appEnviroment } from '__cli/core/meta';

const fireapp = firebase.app();
const fireauth = fireapp.auth();
const firedb = fireapp.firestore();

// connect to firestore locally
if (appEnviroment() === 'dev') {
  firedb.settings({
    host: 'localhost:8080',
    ssl: false
  });
}

export { fireapp, fireauth, firedb };
