import { createBaseStore } from './base';

export function createEntityStore (config) {
  const { repository } = config;

  const state = {
    items: {}
  };

  const getters = {
    get allItems () {
      return Object.values(state.items);
    },
    get itemById () {
      return id => state.items[id];
    }
  };

  const baseStore = createBaseStore({ state, getters });

  repository.subscribe(items => {
    state.items = items.reduce((acc, item) => {
      acc[item.id] = { ...item };
      return acc;
    }, {});
    baseStore.invalidate();
  });

  return baseStore;
}
