import { AuthMech } from '@joaomelo/auth-mech';
import { i18n } from '__cli/core/i18n';
import { fireauth } from '__cli/core/firebase';

const authMech = new AuthMech({
  service: fireauth,
  fuse: {
    name: 'profiles',
    onCreate: user => {
      const publicEmail = user.email;
      const nickname = publicEmail.slice(0, publicEmail.indexOf('@'));
      return {
        locale: i18n.fallbackLocale,
        nickname,
        publicEmail
      };
    }
  }
});

export { authMech };
