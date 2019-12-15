import 'firebase/firestore';

import { appMode } from '@/helpers/enviroment.js';
import { fireApp } from '@/services/fireapp';

function pointFirestoreToLocalEmulator (db) {
  db.settings({
    host: 'localhost:8080',
    ssl: false
  });
}

function igniteFirestore () {
  const db = fireApp.firestore();
  if (appMode() === 'dev_em') {
    pointFirestoreToLocalEmulator(db);
  }
  return db;
}

export default igniteFirestore();
