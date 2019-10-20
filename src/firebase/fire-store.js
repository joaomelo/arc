import { firebase, fireApp } from './fire-app';
import 'firebase/firestore';

const db = fireApp.firestore();
const now = firebase.firestore.FieldValue.serverTimestamp();

function bind (collection, callback) {
  const query = db.collection(collection).where('deleted', '==', false).orderBy('title', 'asc');
  query.onSnapshot(snapshot => {
    const promises = [];
    snapshot.forEach(doc => {
      const promise = convertToItemData(doc, false);
      promises.push(promise);
    });
    Promise.all(promises).then(items => callback(items));
  });
}

function trail () {
  return {
    modifiedAt: now,
    modifiedBy: convertToReference('profiles', firebase.auth().currentUser.uid)
  };
};

function add (collection, item) {
  db.collection(collection).add({
    ...convertToDocData(item),
    ...trail(),
    deleted: false
  });
}

function set (collection, id, item) {
  db.collection(collection).doc(id).set({
    ...convertToDocData(item),
    ...trail(),
    deleted: false
  });
}

function del (collection, id) {
  db.collection(collection).doc(id).update({
    ...trail(),
    deleted: true
  });
}

async function convertToItemData (doc, isRecursive) {
  const item = {};
  const data = { ...doc.data() };

  const collection = doc.ref.parent.id;
  Object.defineProperty(item, 'collection', { value: collection, enumerable: false });

  Object.defineProperty(item, 'id', { value: doc.id, enumerable: false });

  for (const key of Object.keys(data)) {
    if (isReference(data[key]) && !isRecursive) {
      const refDoc = await data[key].get();
      item[key] = await convertToItemData(refDoc, true);
    } else if (isTimestamp(data[key])) {
      item[key] = convertToMoment(data[key]);
    } else {
      item[key] = data[key];
    }
  }

  return item;
}

function convertToDocData (item) {
  const doc = {};

  Object.keys(item).forEach(key => {
    if (item[key].collection) {
      doc[key] = convertToReference(item[key].collection, item[key].id);
    } else {
      doc[key] = item[key];
    }
  });

  return doc;
}

function isReference (value) {
  return value instanceof firebase.firestore.DocumentReference;
}

function convertToReference (collection, id) {
  return db.collection(collection).doc(id);
}

function isTimestamp (value) {
  return value instanceof firebase.firestore.Timestamp;
}

function convertToMoment (timeStamp) {
  const moment = require('moment');
  return moment(timeStamp.toDate());
}

export { bind, add, set, del };
