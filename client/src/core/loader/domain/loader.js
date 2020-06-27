const loaderState = {
  loadStatus: 'IDLE',
  runningTasks: new Set()
};

function startLoading (taskId) {
  const id = taskId || Date.now();

  loaderState.runningTasks.add(id);
  updateStatus();

  const stop = () => stopLoading(id);
  return stop;
}

function stopLoading (taskId) {
  if (!taskId) throw new Error('no taskId argument was passed to stopLoading');

  loaderState.runningTasks.delete(taskId);
  updateStatus();
}

function updateStatus () {
  const newStatus = loaderState.runningTasks.size > 0 ? 'LOADING' : 'IDLE';
  if (newStatus !== loaderState.loadStatus) {
    loaderState.loadStatus = newStatus;
  }
};

export { loaderState, startLoading };
