import * as firebase from 'firebase/app';
import { appMode } from '@/helpers/enviroment.js';

const prod = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

const dev = {
  apiKey: process.env.FIREBASE_API_KEY_DEV,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN_DEV,
  databaseURL: process.env.FIREBASE_DATABASE_URL_DEV,
  projectId: process.env.FIREBASE_PROJECT_ID_DEV,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID_DEV,
  appId: process.env.FIREBASE_APP_ID_DEV
};

const firebaseConfig = appMode() === 'dev_cl' ? dev : prod;
const fireApp = firebase.initializeApp(firebaseConfig);

export { fireApp, firebase };
