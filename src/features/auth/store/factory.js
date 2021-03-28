import { BehaviorSubject } from 'rxjs';

export function createAuthStore () {
  const state = {
    authStatus: 'signedOut',
    user: null
  };

  const getters = {
    get user () {
      return { ...state.user };
    },
    get isSignedIn () {
      return !!state.user;
    }
  };

  const subject = new BehaviorSubject(getters);

  return {
    state,
    getters,
    subscribe: observer => subject.subscribe(observer),
    actions: {
      signIn (user) {
        state.user = { ...user };
        state.authStatus = 'signedIn';
        subject.next(getters);
      },
      signOut () {
        state.user = null;
        state.authStatus = 'signedOut';
        subject.next(getters);
      }
    }
  };
}
