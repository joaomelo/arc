import { isPlainObject } from 'lodash-es';

import 'firebase/firestore';
import { firebase, fireApp } from './fire-app';

const db = fireApp.firestore();
const now = firebase.firestore.FieldValue.serverTimestamp();

function bind (collection, loadMutation, callback) {
  const query = db.collection(collection).where('deleted', '==', false).orderBy('title', 'asc');
  query.onSnapshot(snapshot => {
    loadMutation('startedLoad', collection);
    const promises = snapshot.docs.map(doc => convertToItem(doc, false));
    Promise.all(promises).then(items => {
      callback(items);
      loadMutation('stoppedLoad', collection);
    });
  });
}

async function get (collection, id) {
  const docRef = db.collection(collection).doc(id);
  const doc = await docRef.get();
  const item = doc.exists ? await convertToItem(doc) : null;
  return item;
}

function add (collection, item) {
  return db.collection(collection).add({
    ...convertToFiredoc(item),
    ...trail(),
    deleted: false
  });
}

function set (collection, id, item) {
  return db.collection(collection).doc(id).set({
    ...convertToFiredoc(item),
    ...trail(),
    deleted: false
  });
}

function del (collection, id) {
  return db.collection(collection).doc(id).update({
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

  item.collection = doc.ref.parent.id;
  item.id = doc.id;

  for (const key of Object.keys(firedata)) {
    item[key] = await convertToItemData(firedata[key]);
  }

  return item;
}

async function convertToItemData (firedata) {
  if (firedata instanceof firebase.firestore.DocumentReference) {
    const refDoc = await firedata.get();
    const itemField = await convertToItem(refDoc);
    return itemField;
  }

  if (Array.isArray(firedata)) {
    const promises = firedata.map(i => convertToItemData(i));
    const arrayField = await Promise.all(promises);
    return arrayField;
  }

  if (isPlainObject(firedata) && Object.keys(firedata).length > 0) {
    const objectField = {};
    Object.keys(firedata).forEach(k => convertToItemData(firedata[k]).then(v => { objectField[k] = v; }));
    return objectField;
  }

  if (firedata instanceof firebase.firestore.Timestamp) {
    const dateField = firedata.toDate();
    return dateField;
  }

  return firedata;
}

function convertToFiredoc (item) {
  const doc = {};

  Object.keys(item).forEach(key => {
    if (![null, undefined].includes(item[key]) && !['id', 'collection'].includes(key)) {
      if (Array.isArray(item[key])) {
        if (item[key].length > 0) {
          doc[key] = item[key].map(i => i.collection ? convertToReference(i.collection, i.id) : i);
        }
      } else if (item[key].collection) {
        doc[key] = convertToReference(item[key].collection, item[key].id);
      } else {
        doc[key] = item[key];
      }
    }
  });
  return doc;
}

function convertToReference (collection, id) {
  return db.collection(collection).doc(id);
}

export { bind, get, add, set, del };
