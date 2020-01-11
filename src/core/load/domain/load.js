import { LOAD_STATUS } from '../common';
import { store } from '@/core/store';

function startLoadTask (task) {
  store.state.runningTasks.add(task);
  updateStatus();
}

function stopLoadTask (task) {
  store.state.runningTasks.delete(task);
  updateStatus();
}

function updateStatus () {
  store.state.loadStatus = store.state.runningTasks.size > 0 ? LOAD_STATUS.LOADING : LOAD_STATUS.IDLE;
};

export { startLoadTask, stopLoadTask };
