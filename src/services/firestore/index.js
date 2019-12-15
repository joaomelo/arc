import { startLoad, stopLoad } from '@/load';
import db from './db.js';
import { convertToItem, convertToDocument } from './bridge.js';
import saveVersion from './history.js';

function bind (collection, callback) {
  const query = db.collection(collection).where('deleted', '==', false).orderBy('title', 'asc');
  query.onSnapshot(snapshot => {
    startLoad(collection);
    const promises = snapshot.docs.map(doc => convertToItem(doc, false));
    Promise.all(promises).then(items => {
      callback(items);
      stopLoad(collection);
    });
  });
}

async function get (collection, id) {
  startLoad(collection + id);
  const docRef = db.collection(collection).doc(id);
  const doc = await docRef.get();
  const item = doc.exists ? await convertToItem(doc) : null;
  stopLoad(collection + id);
  return item;
}

function add (item) {
  item.deleted = false;

  const addPromise = db.collection(item.collection).add({
    ...convertToDocument(item)
  });

  addPromise.then(ref => {
    item.id = ref.id;
    saveVersion(item);
  });
}

function set (item) {
  saveVersion(item);
  return db.collection(item.collection).doc(item.id).set({
    ...convertToDocument(item)
  });
}

function del (collection, id) {
  const getPromise = get(collection, id);
  getPromise.then(item => {
    item.deleted = true;
    set(item);
    saveVersion(item);
  });
}

export { bind, get, add, set, del };
