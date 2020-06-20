const loaderState = {
  loadStatus: 'IDLE',
  runningTasks: new Set()
};

function promiseLoading (promise, taskId) {
  const stop = startLoading(taskId);
  promise.finally(() => stop());
}

function startLoading (taskId) {
  loaderState.runningTasks.add(taskId);
  updateStatus();

  const stop = () => stopLoading(taskId);
  return stop;
}

function stopLoading (taskId) {
  loaderState.runningTasks.delete(taskId);
  updateStatus();
}

function updateStatus () {
  const newStatus = loaderState.runningTasks.size > 0 ? 'LOADING' : 'IDLE';
  if (newStatus !== loaderState.loadStatus) {
    loaderState.loadStatus = newStatus;
  }
};

export { loaderState, startLoading, promiseLoading };
