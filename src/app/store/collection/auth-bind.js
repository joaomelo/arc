import { AUTH_STATUSES, authStateSubject } from '@/shared/auth';

function bindCollectionToAuth (collection, options) {
  return authStateSubject.subscribe(({ status, oldStatus }) => {
    if (status === oldStatus) return;
    const action = status === AUTH_STATUSES.SIGNED_IN ? 'connect' : 'disconnect';
    collection[action](options);
  });
}

export { bindCollectionToAuth };
