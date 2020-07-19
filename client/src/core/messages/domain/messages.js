const messageStore = {
  message: null,
  queue: [],
  timer: null,
  defaultDelay: 3000
};

function showMessage (message) {
  messageStore.queue.push(message);
  if (!messageStore.timer) {
    tickQueue();
  }
}

function tickQueue () {
  messageStore.message = messageStore.queue.length > 0
    ? messageStore.queue.shift()
    : null;

  if (messageStore.message) {
    const delay = messageStore.message.delay || messageStore.defaultDelay;
    messageStore.timer = setTimeout(tickQueue, delay);
  } else {
    clearTimeout(messageStore.timer);
    messageStore.timer = null;
  }
}

export { messageStore, showMessage };
