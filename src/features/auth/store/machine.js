import { Machine, assign } from 'xstate';

export function createAuthStoreMachine () {
  return Machine({
    id: 'authStore',
    context: {
      user: null
    },
    initial: 'signedOut',
    states: {
      signedOut: {
        on: {
          SIGN_IN: {
            target: 'signedIn',
            actions: assign({
              user: (context, event) => event.user
            })
          }
        }
      },
      signedIn: {
        on: {
          SIGN_OUT: {
            target: 'signedOut',
            actions: assign({
              user: null
            })
          }
        }
      }
    }
  });
}
