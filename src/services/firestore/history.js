import { firebase } from '@/services/fireapp';
import db from './db.js';
import { convertToDocument } from './bridge.js';

function saveVersion (item) {
  return db
    .collection(item.collection)
    .doc(item.id)
    .collection('versions')
    .add({
      ...convertToDocument(item),
      ...trail()
    });
}

function trail () {
  return {
    modifiedAt: firebase.firestore.FieldValue.serverTimestamp(),
    modifiedBy: firebase.auth().currentUser.email
  };
};

export default saveVersion;
