import firebase from 'firebase/app';

export function initFirebaseAppFromEnv () {
  return initFirebaseApp(createFirebaseConfigFromEnv());
}

export function initFirebaseApp (config) {
  const app = firebase.apps.length <= 0
    ? firebase.initializeApp(config)
    : firebase.apps[0];

  return app;
}

function createFirebaseConfigFromEnv () {
  return {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseUrl: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSender_id: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };
}
