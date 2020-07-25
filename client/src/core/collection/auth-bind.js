import { AUTH_STATUSES, authStateChanged } from '__cli/core/auth';

function bindCollectionToAuth (collection) {
  return authStateChanged.subscribe(({ status, oldStatus }) => {
    if (status === oldStatus) return;
    const action = status === AUTH_STATUSES.SIGNEDIN ? 'connect' : 'disconnect';
    collection[action]();
  });
}

export { bindCollectionToAuth };
