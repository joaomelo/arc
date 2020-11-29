export function injectFirebaseIntoStore (store, { authService, dbService }) {
  store.$authService = authService;
  store.prototype.$dbService = dbService;
};
