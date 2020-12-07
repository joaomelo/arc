import Vue from 'vue';
import Vuex from 'vuex';
import { usersStoreConfig } from './users';

export function initStore (globals) {
  Vue.use(Vuex);
  const store = new Vuex.Store({
    modules: {
      usersStore: usersStoreConfig.store
    }
  });

  // dependency injection of globals
  for (const key in globals) {
    store[`$${key}`] = globals[key];
  }

  // call every afterCreate hooks
  const configs = [usersStoreConfig];
  configs.forEach(config => config.afterCreate(store));

  return store;
}
