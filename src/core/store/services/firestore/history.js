import { firebase } from '@/core/fireapp';
import { db } from './db.js';

function saveDocVersion (collection, id, document) {
  return db
    .collection(collection)
    .doc(id)
    .collection('versions')
    .add({
      ...document,
      ...trail()
    });
}

function trail () {
  return {
    modifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
    modifiedBy: firebase.auth().currentUser.email
  };
};

export { saveDocVersion };
