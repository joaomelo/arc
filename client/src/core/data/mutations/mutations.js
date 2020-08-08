import { firedb } from '__cli/core/firebase';

function add (item, options) {
  const doc = convertItemToActiveDoc(item, options.converter);
  const colRef = collection(options.collection);

  return colRef
    .add(doc)
    .then(docRef => this.checkAndVersion(docRef, doc, 'add'));
}

function set (item, options) {
  return this.adapter.set(item);
}

function update (item, options) {
  return this.adapter.update(item);
}

function del (id, options) {
  return this.adapter.del(id);
}

function collection (name) {
  return firedb.collection(name);
}

function convertItemToActiveDoc (item, converter) {
  const safeItem = { ...item };
  const doc = converter
    ? converter(safeItem)
    : safeItem;

  delete doc.id;
  delete doc.collection;
  doc.isActive = true;

  // remove fields passed as empty arrays or null
  const firebase = this.collection.reference.firestore.app.firebase_;
  const deleteField = firebase.firestore.FieldValue.delete();
  for (const property in doc) {
    if (doc[property] === null || (Array.isArray(doc[property]) && doc[property].length <= 0)) {
      doc[property] = deleteField;
    }
  }

  return doc;
}

export { add, set, update, del };
