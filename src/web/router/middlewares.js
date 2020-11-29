export const createBlockPrivateRoutes = (isSignedIn) => (to, from, next) => {
  const isPrivate = !to.meta.isPublic;

  if (isPrivate && !isSignedIn()) {
    next({ name: 'auth' });
  } else {
    next();
  }
};
