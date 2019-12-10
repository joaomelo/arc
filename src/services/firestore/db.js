import 'firebase/firestore';
import { fireApp } from '@/services/fireapp';

function isAppHostedLocally () {
  return location.hostname === 'localhost';
}

function pointFirestoreToLocalEmulator (db) {
  db.settings({
    host: 'localhost:8080',
    ssl: false
  });
}

function igniteFirestore () {
  const db = fireApp.firestore();
  if (isAppHostedLocally()) {
    pointFirestoreToLocalEmulator(db);
  }
  return db;
}

export default igniteFirestore();
