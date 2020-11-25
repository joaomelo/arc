import { firebase, firedb, fireauth } from '@/shared/firebase';

function add (item, options) {
  const col = firedb.collection(options.collection);
  const doc = convertItemToActiveDoc(item, options.converter);

  return col
    .add(doc)
    .then(docRef => options.isSafe && saveVersion(docRef, doc, 'add'));
}

function set (item, options) {
  return docOperation(item, options, 'set');
}

function update (item, options) {
  return docOperation(item, options, 'update');
}

function del (id, options) {
  const docRef = firedb.collection(options.collection).doc(id);
  return docRef
    .update({ isActive: false })
    .then(() => options.isSafe && saveVersion(docRef, { id }, 'del'));
}

function docOperation (item, options, operation) {
  const docRef = firedb.collection(options.collection).doc(item.id);
  const doc = convertItemToActiveDoc(item, options.converter);

  return docRef[operation](doc)
    .then(() => options.isSafe && saveVersion(docRef, doc, operation));
}

function convertItemToActiveDoc (item, converter) {
  const safeItem = { ...item };
  const doc = converter
    ? converter(safeItem)
    : safeItem;

  delete doc.id;
  delete doc.collection;
  doc.isActive = true;

  const deleteField = firebase.firestore.FieldValue.delete();
  for (const property in doc) {
    if (doc[property] === null || (Array.isArray(doc[property]) && doc[property].length <= 0)) {
      doc[property] = deleteField;
    }
  }

  return doc;
}

function saveVersion (docRef, payload, operation) {
  const copyPayload = { ...payload };

  // clearing firestore field values objects from payload
  // note that Fa is a key used by Firestore library
  // it was captured by inspecting console log no docs where found about it
  for (const property in copyPayload) {
    if (copyPayload[property].Fa === 'FieldValue.delete') {
      copyPayload[property] = 'FieldValue.delete';
    }
  }

  const versionDoc = {
    when: firebase.firestore.FieldValue.serverTimestamp(),
    who: fireauth.currentUser.uid,
    how: operation,
    what: JSON.stringify(copyPayload)
  };

  return docRef
    .collection('history')
    .add(versionDoc);
}

export { add, set, update, del };
