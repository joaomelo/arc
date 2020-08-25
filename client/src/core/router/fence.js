// import { AUTH_STATUSES, authState, authStateChanged } from '__cli/core/auth';

function fenceRoutes (router) {
  activateReactionToAuthState(router);
  activateBeforeEachRouteCheck(router);
};

function activateReactionToAuthState (router) {
  setTimeout(() => router.push({ name: 'dashboard' }), 1000);

  // const handleAuthStateChange = ({ oldStatus, status }) => {
  //   // only user data changed
  //   if (oldStatus === status) return;

  //   const routesForStatus = {
  //     [AUTH_STATUSES.UNSOLVED]: 'loading',
  //     [AUTH_STATUSES.SIGNEDOUT]: 'auth',
  //     [AUTH_STATUSES.PENDING]: 'unverified',
  //     [AUTH_STATUSES.SIGNEDIN]: 'dashboard'
  //   };

  //   const currentName = router.currentRoute.name;
  //   const nextName = routesForStatus[status];

  //   if (currentName !== nextName) {
  //     router.push({ name: nextName });
  //   }
  // };

  // authStateChanged.subscribe(handleAuthStateChange);
}

function activateBeforeEachRouteCheck (router) {
  // const routeCheck = (to, from, next) => {
  //   const openRouteNames = ['loading', 'auth', 'unverified'];
  //   const isGoingToOpenRoute = openRouteNames.includes(to.name);
  //   const isSignedIn = authState.status === AUTH_STATUSES.SIGNEDIN;
  //   const isFreeToGo = isGoingToOpenRoute || isSignedIn;

  //   if (isFreeToGo) {
  //     next();
  //   } else {
  //     next(false);
  //   }
  // };

  // router.beforeEach(routeCheck);
}

export { fenceRoutes };
