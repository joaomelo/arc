import { LOAD_STATUS } from '../common';

const state = {
  loadStatus: LOAD_STATUS.IDLE,
  runningTasks: new Set()
};

function startLoadTask (task) {
  state.runningTasks.add(task);
  syncState();
}

function stopLoadTask (task) {
  state.runningTasks.delete(task);
  syncState();
}

function syncState () {
  state.loadStatus = state.runningTasks.size > 0 ? LOAD_STATUS.LOADING : LOAD_STATUS.IDLE;
};

function isLoading () {
  return state.loadStatus === LOAD_STATUS.LOADING;
}

export { startLoadTask, stopLoadTask, isLoading };
