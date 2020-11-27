export function subscribeToAuthStatus (observer, authService) {
  authService.onAuthStateChanges(observer);
};
