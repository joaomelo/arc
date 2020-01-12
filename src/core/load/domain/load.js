import { publish } from '@/core/bus';
import { LOAD_EVENTS, LOAD_STATUS } from '../common';

const state = {
  loadStatus: LOAD_STATUS.IDLE,
  runningTasks: new Set()
};

function startLoading (task) {
  state.runningTasks.add(task);
  updateStatus();

  const stop = () => stopLoading(task);
  return stop;
}

function stopLoading (task) {
  state.runningTasks.delete(task);
  updateStatus();
}

function updateStatus () {
  const newStatus = state.runningTasks.size > 0 ? LOAD_STATUS.LOADING : LOAD_STATUS.IDLE;
  if (newStatus !== state.loadStatus) {
    state.loadStatus = newStatus;
    publish(LOAD_EVENTS.LOAD_STATUS_CHANGED, { status: newStatus });
  }
};

export { startLoading };
