import { AuthMech } from '@joaomelo/auth-mech';
import { fireauth } from '__cli/core/firebase';

const authMech = new AuthMech({
  service: fireauth,
  fuse: {
    name: 'profiles',
    onCreate: user => {
      const email = user.email;
      const nickname = email.slice(0, email.indexOf('@'));
      return {
        nickname,
        email
      };
    }
  }
});

export { authMech };
