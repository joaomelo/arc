import { BUS_SUBSCRIPTION_STATES } from './types.js';

class Bus {
  constructor () {
    this.subscriptions = {};
  }

  subscribe (eventType, callback, runIfCalled = false) {
    if (!this.subscriptions[eventType]) {
      this.subscriptions[eventType] = {
        state: BUS_SUBSCRIPTION_STATES.VIRGIN,
        lastPayload: null,
        callbaks: []
      };
    }

    const sub = this.subscriptions[eventType];

    if (runIfCalled && sub.state === BUS_SUBSCRIPTION_STATES.CALLED) {
      callback(sub.lastPayload);
    }
    sub.callbacks.push(callback);

    const unsubscribe = () => sub.callbacks.splice(sub.callbacks.indexOf(callback), 1);
    return unsubscribe;
  }

  publish (eventType, payload) {
    const sub = this.subscriptions[eventType];
    if (!sub) return;

    sub.lastPayload = payload;
    sub.state = BUS_SUBSCRIPTION_STATES.CALLED;
    sub.callbacks.forEach(callback => callback(payload));
  }
}

const bus = new Bus();
export { bus };
