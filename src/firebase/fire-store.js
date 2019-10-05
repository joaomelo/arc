import { firebase, fireApp } from './fire-app';
import 'firebase/firestore';

const db = fireApp.firestore();
const now = firebase.firestore.FieldValue.serverTimestamp();

function bindQuery (collection, options, callback) {
  let query = db.collection(collection);
  if (options.orderBy) {
    const { field, direction } = options.orderBy;
    query = query.orderBy(field, direction || 'asc');
  }

  const unsubscribe = query.onSnapshot(snapshot => {
    const docs = [];
    snapshot.forEach(doc => {
      docs.push({
        id: doc.id,
        ...doc.data()
      });
    });

    callback(docs);
  });

  return unsubscribe;
}

function add (collection, data) {
  db.collection(collection).add({
    ...data,
    createdAt: now
  });
}

export { bindQuery, add };
