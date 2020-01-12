import { subscribe } from '@/core/bus';
import { AUTH_EVENTS, AUTH_STATUSES, getAuthStatus } from '@/modules/auth';
import { router } from './router';

function igniteGuardian () {
  // setup reactivity behaviour to change route when auth status changes
  subscribe(AUTH_EVENTS.AUTH_STATUS_CHANGED, syncRouteToAuthStatus, true);

  // setup router to check auth status before route change
  // even with reactivity someone can just type a route in the adress bar
  router.beforeEach(guardRoutes);
}

function syncRouteToAuthStatus ({ status }) {
  const newRouteName = status === AUTH_STATUSES.LOGGEDIN ? 'start' : 'login';

  if (newRouteName !== router.currentRoute.name) {
    router.push({ name: newRouteName });
  }
};

function guardRoutes (to, from, next) {
  const newRoute = to.name;

  if (isStatusFenced() && newRoute !== 'login') {
    next({ name: 'login' });
  } else {
    next();
  }
}

function isStatusFenced (status) {
  const fencedStatus = [AUTH_STATUSES.UNSOLVED, AUTH_STATUSES.LOGGEDOUT];
  const currentStatus = getAuthStatus();
  return fencedStatus.includes(currentStatus);
}

export { igniteGuardian };
