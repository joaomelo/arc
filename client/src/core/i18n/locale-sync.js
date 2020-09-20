import { i18n } from '__cli/core/i18n';
import { authState } from '__cli/core/auth';
import { profilesCollection } from './collection';

function plugLocaleSync () {
  profilesCollection.subscribe(profiles => {
    if (!profiles) return;
    const currentProfile = profiles.find(p => p.id === authState.userData.uid);
    if (!currentProfile) return;

    const currentLocale = currentProfile.locale;
    if (i18n.locale !== currentLocale) {
      i18n.locale = currentLocale;
    }
  });
}

export { plugLocaleSync };
