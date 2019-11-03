import 'firebase/firestore';
import { firebase, fireApp } from './fire-app';

const db = fireApp.firestore();
const now = firebase.firestore.FieldValue.serverTimestamp();

function bind (collection, callback) {
  const query = db.collection(collection).where('deleted', '==', false).orderBy('title', 'asc');
  query.onSnapshot(snapshot => {
    const promises = snapshot.docs.map(doc => convertToItem(doc, false));
    Promise.all(promises).then(items => callback(items));
  });
}

function add (collection, item) {
  db.collection(collection).add({
    ...convertToFiredoc(item),
    ...trail(),
    deleted: false
  });
}

function set (collection, id, item) {
  db.collection(collection).doc(id).set({
    ...convertToFiredoc(item),
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

function trail () {
  return {
    modifiedAt: now,
    modifiedBy: firebase.auth().currentUser.email
  };
};

async function convertToItem (doc) {
  const item = {};
  const firedata = { ...doc.data() };

  const collection = doc.ref.parent.id;
  Object.defineProperty(item, 'collection', { value: collection, enumerable: false });
  Object.defineProperty(item, 'id', { value: doc.id, enumerable: false });

  for (const key of Object.keys(firedata)) {
    item[key] = await convertToItemData(firedata[key], false);
  }

  return item;
}

async function convertToItemData (firedata) {
  let result;

  if (Array.isArray(firedata)) {
    const promises = firedata.map(i => convertToItemData(i));
    result = await Promise.all(promises);
  } else if (isReference(firedata)) {
    const refDoc = await firedata.get();
    result = await convertToItem(refDoc);
  } else {
    result = convertToPrimitive(firedata);
  }

  return result;
}

function convertToFiredoc (item) {
  const doc = {};

  Object.keys(item).forEach(key => {
    if (item[key] !== null && item[key] !== undefined) {
      if (Array.isArray(item[key])) {
        doc[key] = item[key].map(i => i.collection ? convertToReference(i.collection, i.id) : i);
      } else if (item[key].collection) {
        doc[key] = convertToReference(item[key].collection, item[key].id);
      } else {
        doc[key] = item[key];
      }
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

function convertToPrimitive (value) {
  if (isTimestamp(value)) {
    return convertToMoment(value);
  } else {
    return value;
  }
}

function isTimestamp (value) {
  return value instanceof firebase.firestore.Timestamp;
}

function convertToMoment (timeStamp) {
  return timeStamp.toDate();
}

export { bind, add, set, del };
