import { AUTH_STATUSES, authStateSubject } from '@/core/auth';

function bindCollectionToAuth (collection, options) {
  return authStateSubject.subscribe(({ status, oldStatus }) => {
    if (status === oldStatus) return;
    const action = status === AUTH_STATUSES.SIGNEDIN ? 'connect' : 'disconnect';
    collection[action](options);
  });
}

export { bindCollectionToAuth };
