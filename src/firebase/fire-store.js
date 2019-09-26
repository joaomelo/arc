import { fireApp } from './fire-app';
import 'firebase/firestore';

const fireStore = fireApp.firestore();
// const { TimeStamp, GeoPoint } = fireStore;

function bindQuery (collection, options, callback) {
  let query = fireStore.collection(collection);
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

export { bindQuery };
