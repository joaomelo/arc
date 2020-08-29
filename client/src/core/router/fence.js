import { AUTH_STATUSES, authState, authStateSubject } from '__cli/core/auth';

function fenceRoutes (router) {
  activateReactionToAuthState(router);
  activateBeforeEachRouteCheck(router);
};

function activateReactionToAuthState (router) {
  const handleAuthStateChange = ({ oldStatus, status }) => {
    // if only user data changed, current route should remain
    if (oldStatus === status) return;

    const routesForStatus = {
      [AUTH_STATUSES.SIGNEDOUT]: 'auth',
      [AUTH_STATUSES.SIGNEDIN]: 'dashboard'
    };

    const currentName = router.currentRoute.name;
    const nextName = routesForStatus[status];

    if (currentName !== nextName) {
      router.push({ name: nextName });
    }
  };

  authStateSubject.subscribe(handleAuthStateChange);
}

function activateBeforeEachRouteCheck (router) {
  const routeCheck = (to, from, next) => {
    const openRouteNames = ['auth'];
    const isGoingToOpenRoute = openRouteNames.includes(to.name);
    const isSignedIn = authState.status === AUTH_STATUSES.SIGNEDIN;
    const isFreeToGo = isGoingToOpenRoute || isSignedIn;

    if (isFreeToGo) {
      next();
    } else {
      next(false);
    }
  };

  router.beforeEach(routeCheck);
}

export { fenceRoutes };
