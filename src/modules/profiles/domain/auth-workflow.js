// import { subscribe, publish } from '@/core/bus';
// import { AUTH_EVENTS, AUTH_STATUS } from '../common';

// const state = {
//   authStatus: AUTH_STATUSES.UNSOLVED,
//   currentUser: null
// };

// function bindService() {
//   const updateAuthState = ({ user }) => {
//     state.currentUser = user;
//     state.authStatus = user ?

//     // const payload = {
//     //   user
//     // };
//     publish(AUTH_EVENTS.STATUS_CHANGED, payload);
//   };

//   subscribe(AUTH_EVENTS.SERVICE_STATE_CHANGED, updateAuthState, true);
// }

function login (email, password) {
  console.log('domain login');
};

function logout (email, password) {
  console.log('domain login');
};

export { /* bindService, */ login, logout };
