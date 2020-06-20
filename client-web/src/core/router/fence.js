import { authMech } from '__cli/core/auth';

function fenceRoutes (router) {
  activateReactionToAuthState(router);
  activateBeforeEachRouteCheck(router);
};

function activateReactionToAuthState (router) {
  authMech.subscribe(({ status }) => {
    const routesForStatus = {
      UNSOLVED: 'loading',
      UNVERIFIED: 'unverified',
      SIGNEDOUT: 'login',
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
    const openRouteNames = ['loading', 'login', 'unverified'];
    const isGoingToOpenRoute = openRouteNames.includes(to.name);
    // const isSignedIn = authMech.state.status === 'SIGNEDIN';
    const isSignedIn = true;
    const isFreeToGo = isGoingToOpenRoute || isSignedIn;

    if (isFreeToGo) {
      next();
    } else {
      next(false);
    }
  });
}

export { fenceRoutes };
