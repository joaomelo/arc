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

// global locale update was moved here to avoid
// circular dependency between i18n and auth
// but this is probably not a ideal encapsulation
// yet to be improved
authMech.subscribe(({ userData }) => {
  if (!userData || !userData.locale) return;

  const newLocale = userData.locale;
  if (newLocale !== i18n.locale) {
    i18n.locale = newLocale;
  }
});

export { authMech };
