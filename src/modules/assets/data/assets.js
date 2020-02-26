import { add, set, del } from '@src/services/firestore';
import { setCollection } from './helpers.js';

const state = {
  assets: []
};

const getters = {
  getAssets: state => state.assets,
  getAsset: state => id => state.assets.find(asset => asset.id === id)
};

const mutations = {
  commitAssets (state, assets) {
    state.assets = assets;
  }
};

const actions = {
  setAssets ({ commit }) {
    setCollection(commit, 'assets');
  },
  addAsset (context, asset) {
    add(asset);
  },
  setAsset (context, asset) {
    set(asset);
  },
  delAsset (context, id) {
    del('assets', id);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
