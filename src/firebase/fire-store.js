import { firebase, fireApp } from './fire-app';
import 'firebase/firestore';

const db = fireApp.firestore();
const now = firebase.firestore.FieldValue.serverTimestamp();

function bind (collection, options, callback) {
  let query = db.collection(collection).where('deleted', '==', false);
  if (options.orderBy) {
    const { field, direction } = options.orderBy;
    query = query.orderBy(field, direction || 'asc');
  }

  const unsubscribe = query.onSnapshot(snapshot => {
    const docs = [];
    snapshot.forEach(doc => {
      const item = { ...doc.data() };
      Object.defineProperty(item, 'id', { value: doc.id, enumerable: false });
      docs.push(item);
    });

    callback(docs);
  });

  return unsubscribe;
}

function trail () {
  return {
    modifiedAt: now,
    modifiedBy: firebase.auth().currentUser.uid
  };
};

function add (collection, data) {
  db.collection(collection).add({
    ...data,
    ...trail(),
    deleted: false
  });
}

function set (collection, id, data) {
  db.collection(collection).doc(id).set({
    ...data,
    ...trail(),
    deleted: false
  });
}

function del (collection, id) {
  db.collection(collection).doc(id).update({
    deleted: true,
    ...trail()
  });
}

export { bind, add, set, del };
