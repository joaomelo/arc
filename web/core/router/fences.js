export function guardRoutes (to, from, next) {
  const isSignedIn = false;
  const hasPrivate = to.matched.some(route => !route.meta.isPublic);
  if (hasPrivate && !isSignedIn) {
    next({ name: 'auth' });
  } else {
    next();
  }
}
