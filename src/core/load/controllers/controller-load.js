import { LOAD_STATES, LOAD_EVENTS } from './types.js';
import { bus } from '@/core/bus';

class ControllerLoad {
  constructor () {
    this.state = LOAD_STATES.IDLE;
    this.loadBacklog = new Set();
    bus.subscribe(LOAD_EVENTS.LOADING_STARTED, this.startLoading);
    bus.subscribe(LOAD_EVENTS.LOADING_STOPPED, this.stopLoading);
  }

  updateState () {
    this.state = this.loadBacklog.size > 0 ? LOAD_STATES.LOADING : LOAD_STATES.IDLE;
  }

  startLoading (key) {
    this.loadBacklog.add(key);
    this.updateState();
  }

  stopLoading (key) {
    this.loadBacklog.add(key);
    this.updateState();
  }
}

const controllerLoad = new ControllerLoad();
export { controllerLoad };
