import { store } from '@/core/store';
import { AUTH_STATUS } from '@/modules/auth';
import { router } from './router';

function igniteGuardian () {
  // setup reactivity behaviour to change route when auth status changes
  store.watch(state => state.auth.authStatus, syncRouteToAuthStatus, { imediate: true });

  // setup router to check auth status before route change
  // even with reactivity someone can just type a route in the adress bar
  router.beforeEach(guardRoutes);
}

function syncRouteToAuthStatus (newAuthStatus) {
  const newRouteName = newAuthStatus === AUTH_STATUS.LOGGEDIN ? 'start' : 'login';

  if (newRouteName !== router.currentRoute.name) {
    router.push({ name: newRouteName });
  }
};

function guardRoutes (to, from, next) {
  const newRoute = to.name;

  if (isStatusFenced(store.state.auth.authStatus) && newRoute !== 'login') {
    next({ name: 'login' });
  } else {
    next();
  }
}

function isStatusFenced (status) {
  const fencedStatus = [AUTH_STATUS.UNSOLVED, AUTH_STATUS.LOGGEDOUT];
  return fencedStatus.includes(status);
}

export { igniteGuardian };
