// // kickstarting module
// import { igniteAuth } from './domain';
// igniteAuth();

// // export public asssets
// export { getAuthStatus, getCurrentUser } from './domain';
// export { AUTH_EVENTS } from './common';
// export { LinkLogout, PageLogin } from './ui';

const authMech = {
  subscribe (observer) {
    observer({ status: 'UNSOLVED' });
    setTimeout(() => observer({ status: 'SIGNEDIN' }), 1000);
  }
};

export { authMech };
