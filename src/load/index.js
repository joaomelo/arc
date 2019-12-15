import store from '@/data/store';

const commit = store.commit;

function startLoad (key) {
  commit('startedLoad', key);
}

function stopLoad (key) {
  commit('stoppedLoad', key);
}

export { startLoad, stopLoad };
