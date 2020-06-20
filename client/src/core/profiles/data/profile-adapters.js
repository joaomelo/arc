import { i18n } from '__cli/core/profiles/data/client/src/core/i18n';

function convertProfileToDoc (profile) {
  const doc = {
    title: profile.title,
    lang: profile.lang || i18n.fallbackLocale
  };

  return doc;
}

function convertDocsToProfiles (docs) {
  const profiles = docs.map(doc => convertDocToProfile(doc));
  return profiles;
}

function convertDocToProfile (doc) {
  if (!doc.exists) return;

  const data = { ...doc.data() };

  const profile = {
    collection: 'profiles',
    id: doc.id,
    title: data.title,
    lang: data.lang || i18n.fallbackLocale
  };

  return profile;
};

export { convertProfileToDoc, convertDocsToProfiles, convertDocToProfile };
