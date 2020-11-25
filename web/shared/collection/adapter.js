import { firedb } from '@/shared/firebase';
import { createQuery } from './query';

class FirestoreAdapter {
  constructor ({ name, options, adapterUpdateSignal }) {
    const reference = firedb.collection(name);

    this.options = options;
    this.collection = {
      name,
      reference
    };

    const query = createQuery(reference, options.query || {});
    query.onSnapshot({
      next: snapshot => {
        const items = this.convertDocsToItems(snapshot.docs);
        adapterUpdateSignal.next(items);
      },
      error: error => console.error(error)
    });
  }

  convertDocsToItems (docs) {
    const items = docs.map(doc => {
      const basicItem = {
        id: doc.id,
        collection: this.collection.name,
        ...doc.data()
      };

      const item = (this.options.converters && this.options.converters.fromDocToItem)
        ? this.options.converters.fromDocToItem(basicItem)
        : basicItem;

      return item;
    });

    return items;
  }

  add (item) {
    const doc = this.convertItemToActiveDoc(item);
    const colRef = this.collection.reference;

    return colRef
      .add(doc)
      .then(docRef => this.checkAndVersion(docRef, doc, 'add'));
  }

  set (item) {
    return this.__setOrUpdate(item, 'set');
  }

  update (item) {
    return this.__setOrUpdate(item, 'update');
  }

  __setOrUpdate (item, method) {
    const doc = this.convertItemToActiveDoc(item);
    const docRef = this.collection.reference.doc(item.id);

    return docRef[method](doc)
      .then(() => this.checkAndVersion(docRef, doc, method));
  }

  del (id) {
    const docRef = this.collection.reference.doc(id);
    return docRef
      .update({ isActive: false })
      .then(() => this.checkAndVersion(docRef, { id }, 'del'));
  }

  convertItemToActiveDoc (item) {
    const safeItem = { ...item };
    const doc = (this.options.converters && this.options.converters.fromItemToDoc)
      ? this.options.converters.fromItemToDoc(safeItem)
      : safeItem;

    delete doc.id;
    delete doc.collection;
    doc.isActive = true;

    // remove fields passed as empty arrays
    const firebase = this.collection.reference.firestore.app.firebase_;
    const deleteField = firebase.firestore.FieldValue.delete();
    for (const property in doc) {
      if (Array.isArray(doc[property]) && doc[property].length <= 0) {
        doc[property] = deleteField;
      }
    }

    return doc;
  }

  async checkAndVersion (docRef, payload, operation) {
    if (this.options.saveMode !== 'safe') return;

    const copyPayload = { ...payload };

    // clearing firestore field values objects from payload
    // note that Fa is a key used by Firestore library
    // it was captured by inspecting console log no docs where found about it
    for (const property in copyPayload) {
      if (copyPayload[property].Fa === 'FieldValue.delete') {
        copyPayload[property] = 'FieldValue.delete';
      }
    }

    const app = this.collection.reference.firestore.app;
    const versionDoc = {
      when: app.firebase_.firestore.FieldValue.serverTimestamp(),
      who: app.auth().currentUser.uid,
      how: operation,
      what: JSON.stringify(copyPayload)
    };

    return docRef
      .collection('history')
      .add(versionDoc);
  }
}

export { FirestoreAdapter };
