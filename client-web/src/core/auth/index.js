// // kickstarting module
// import { igniteAuth } from './domain';
// igniteAuth();

// // export public asssets
// export { getAuthStatus, getCurrentUser } from './domain';
// export { AUTH_EVENTS } from './common';
// export { LinkLogout, PageLogin } from './ui';

const authMech = {
  subscribe (observer) {
    this.state = { status: 'UNSOLVED' };
    observer(this.state);
    setTimeout(
      () => {
        this.state = { status: 'SIGNEDIN' };
        observer(this.state);
      },
      1000
    );
  },

  signOut () {
    console.log('logout pressed');
  }
};

export { authMech };
