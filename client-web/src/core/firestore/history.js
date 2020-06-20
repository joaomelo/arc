import { firebase } from '__cli/core/auth/services/client/src/core/fireapp';
import { db } from './db';

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
