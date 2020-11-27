export const createBlockPrivateRoutes = (store) => (to, from, next) => {
  const isSignedIn = store.getters['usersStore/isSignedIn'];
  const isPrivate = !to.meta.isPublic;

  if (isPrivate && !isSignedIn) {
    next({ name: 'auth' });
  } else {
    next();
  }
};
