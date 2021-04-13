import Vue from 'vue';
import Vuex from 'vuex';
import { authStoreConfig } from './auth-store';

export function initVuex (globals) {
  Vue.use(Vuex);
  const store = new Vuex.Store({
    modules: {
      usersStore: authStoreConfig.store
    }
  });

  // dependency injection of globals
  for (const key in globals) {
    store[`$${key}`] = globals[key];
  }

  // call every afterCreate hooks
  const configs = [authStoreConfig];
  configs.forEach(config => config.afterCreate(store));

  return store;
}
