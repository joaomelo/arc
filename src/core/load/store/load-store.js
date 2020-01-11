import { LOAD_STATUS } from '../common';
import { store } from '@/core/store';

const state = {
  loadStatus: LOAD_STATUS.IDLE,
  runningTasks: new Set()
};

const mutations = {
  addTask (state, task) {
    state.runningTasks.add(task);
  },
  removeTask (state, task) {
    state.runningTasks.delete(task);
  }
};

const authStore = {
  state,
  mutations
};

function igniteAuthStore () {
  store.registerModule('auth', authStore);
}

export { igniteAuthStore };
