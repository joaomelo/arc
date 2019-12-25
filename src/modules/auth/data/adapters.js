import { i18n } from '@/i18n';

function convertUserToDoc (user) {
  const doc = {
    title: user.title,
    lang: user.lang || i18n.fallbackLocale,
    deleted: user.deleted || false
  };

  return doc;
}

function convertDocToUser (doc) {
  const data = { ...doc.data() };

  const user = {
    collection: 'users',
    id: doc.id,
    title: data.title,
    lang: data.lang || i18n.fallbackLocale
  };

  return user;
};

export { convertUserToDoc, convertDocToUser };
