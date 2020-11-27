import Vue from 'vue';
import { isProduction } from '@/shared/meta';
import { initFirebaseServices } from './init';

export function initAndInjectFirebaseServices () {
  const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseUrl: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSender_id: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };
  const useEmulators = !isProduction();

  const { auth, firestore } = initFirebaseServices({ config, useEmulators });
  Vue.prototype.$authService = auth;
  Vue.prototype.$dbService = firestore;
};
