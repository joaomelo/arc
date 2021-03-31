
import { createStore } from '../../../app/store-toolkit';
import { arcs } from '../../../../tests/fixtures';

const indexedArcs = arcs.reduce((acc, arc) => {
  acc[arc.id] = { ...arc };
  return acc;
}, {});

export function createArcsStore () {
  const state = {
    arcs: indexedArcs
  };

  const getters = {
    get allItems () {
      return Object.values(state.arcs);
    }
  };

  const actions = {
    addItem (arc) {
      state.arcs[arc.id] = { ...arc };
    }
  };

  return createStore({ state, getters, actions });
}
