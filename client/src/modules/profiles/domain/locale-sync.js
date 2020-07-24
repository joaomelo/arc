import { i18n } from '__cli/core/i18n';
import { authState } from '__cli/core/auth';
import { profilesCollection } from './collection';

function plugLocaleSync () {
  profilesCollection.subscribe(profiles => {
    if (!profiles) return;
    const currentLocale = profiles
      .find(p => p.id === authState.userData.uid)
      .locale;
    if (i18n.locale !== currentLocale) {
      i18n.locale = currentLocale;
    }
  });
}

export { plugLocaleSync };
