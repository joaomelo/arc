import { bindQuery } from '@/firebase';

const state = {
  assets: []
};

const getters = {
  getAssets (state) {
    return state.assets;
  },

  getAsset (state, id) {
    return state.assets.find(asset => asset.id === id);
  }
};

const mutations = {
  commitAssets (state, assets) {
    state.assets = assets;
  }
};

const actions = {
  setAssets ({ commit }) {
    return bindQuery(
      'assets', {
        orderBy: {
          field: 'title',
          direction: 'asc'
        }
      },
      newAssets => commit('commitAssets', newAssets));
  }
};

const assetStore = {
  state,
  getters,
  mutations,
  actions
};

export { assetStore };
