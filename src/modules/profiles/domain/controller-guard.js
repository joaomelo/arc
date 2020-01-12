import router from '@/router.js';
import { auth, AUTH_EVENTS, AUTH_STATUSES } from '../services';
import { bus } from '@/core/bus';

class ControllerGuard {
  constructor () {
    router.beforeEach(this.guardRoutes);
    bus.subscribe(AUTH_EVENTS.AUTH_STATUS_CHANGED, this.updateRoute);
    console.log('ControllerGuard.constructor');
  }

  guardRoutes (to, from, next) {
    const newRoute = to.name;

    if (this.isStatusFenced(auth.status) && newRoute !== 'login') {
      next({ name: 'login' });
    } else {
      next();
    }
  }

  updateRoute (payload) {
    const isFenced = this.isStatusFenced(payload.status);
    const newRouteName = isFenced ? 'login' : 'start';

    this.$router.push({ name: newRouteName });
  }

  isStatusFenced (status) {
    const fencedStatus = [AUTH_STATUSES.UNSOLVED, AUTH_STATUSES.UNSOLVED];
    return fencedStatus.contains(status);
  }
}

const controllerGuard = new ControllerGuard();
export { controllerGuard };
