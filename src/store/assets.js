import { bind, add, set, del } from '@/firebase';

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
    return bind(
      'assets', {
        orderBy: {
          field: 'alias',
          direction: 'asc'
        }
      },
      newAssets => commit('commitAssets', newAssets));
  },
  addAsset (context, asset) {
    add('assets', asset);
  },
  setAsset (context, asset) {
    set('assets', asset.id, asset);
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
