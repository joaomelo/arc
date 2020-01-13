import { i18n } from '@/core/i18n';

function convertProfileToDoc (profile) {
  const doc = {
    title: profile.title,
    lang: profile.lang || i18n.fallbackLocale,
    deleted: profile.deleted || false
  };

  return doc;
}

function convertDocsToProfiles (docs) {
  const profiles = docs.map(doc => convertDocToProfile(doc));
  return profiles;
}

function convertDocToProfile (doc) {
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
