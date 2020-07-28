import { appEnviroment } from '__cli/core/meta';

const fireapp = firebase.app();
const fireauth = fireapp.auth();

const firedb = fireapp.firestore();
// connect to firestore emulator
if (appEnviroment() === 'dev') {
  firedb.settings({
    host: 'localhost:8080',
    ssl: false
  });
}
// offline compatibility
firedb.enablePersistence().catch(e => console.error(e));

export { fireapp, fireauth, firedb };
