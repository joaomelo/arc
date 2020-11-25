import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { isProduction } from '@/shared/meta';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseUrl: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSender_id: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

if (!isProduction()) {
  auth.useEmulator('http://localhost:9099/');
  db.useEmulator('localhost', 8080);
}

export { firebase, auth, db };
