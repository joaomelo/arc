import { AUTH_STATUSES, authStateChanged } from '__cli/core/auth';

function bindCollectionToAuth (collection, options) {
  return authStateChanged.subscribe(({ status, oldStatus }) => {
    if (status === oldStatus) return;
    const action = status === AUTH_STATUSES.SIGNEDIN ? 'connect' : 'disconnect';
    collection[action](options);
  });
}

export { bindCollectionToAuth };
