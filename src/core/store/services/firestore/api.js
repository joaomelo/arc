import db from './db.js';
import { saveDocVersion } from './history.js';

function bindDocs ({ collection, filters = [] }, callback) {
  let query = db.collection(collection).where('deleted', '==', false);

  let i = 0;
  while (filters.length > i) {
    const f = filters[i];
    query = query.where(f.field, f.operator, f.value);
    i++;
  }
  query = query.orderBy('title', 'asc');

  query.onSnapshot(snapshot => callback(snapshot.doc));
}

function getDoc (collection, id) {
  const docRef = db.collection(collection).doc(id);
  return docRef.get();
}

async function addDoc (collection, doc) {
  doc.deleted = false;

  const docRef = await db.collection(collection).add(doc);
  saveDocVersion(collection, docRef.id, doc);

  return docRef;
}

function setDoc (collection, id, document) {
  saveDocVersion(collection, id, document);
  return db.collection(collection).doc(id).set(document);
}

async function delDoc (collection, id) {
  const doc = await getDoc(collection, id);
  doc.deleted = true;
  saveDocVersion(collection, id, doc);
  return setDoc(doc);
}

export { bindDocs, getDoc, addDoc, setDoc, delDoc };
