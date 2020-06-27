import { authMech } from '__cli/core/auth';

function fenceRoutes (router) {
  activateReactionToAuthState(router);
  activateBeforeEachRouteCheck(router);
};

function activateReactionToAuthState (router) {
  authMech.subscribe(({ oldStatus, status }) => {
    // only user data changed
    if (oldStatus === status) return;

    const routesForStatus = {
      UNSOLVED: 'loading',
      UNVERIFIED: 'unverified',
      SIGNEDOUT: 'auth',
      SIGNEDIN: 'dashboard'
    };

    const currentName = router.currentRoute.name;
    const nextName = routesForStatus[status];

    if (currentName !== nextName) {
      router.push({ name: nextName });
    }
  });
}

function activateBeforeEachRouteCheck (router) {
  router.beforeEach((to, from, next) => {
    const openRouteNames = ['loading', 'auth', 'unverified'];
    const isGoingToOpenRoute = openRouteNames.includes(to.name);
    const isSignedIn = authMech.state.status === 'SIGNEDIN';
    const isFreeToGo = isGoingToOpenRoute || isSignedIn;

    if (isFreeToGo) {
      next();
    } else {
      next(false);
    }
  });
}

export { fenceRoutes };
