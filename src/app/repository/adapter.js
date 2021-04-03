export function adaptFirestore (config) {
  return {
    repository: name => collection(name, config)
  };
}

function collection (name, config) {
  const { firestore, firebase } = config;
  const collection = firestore.collection(name);

  return {
    add: items => add(items, collection, firestore),
    query: filters => query(filters, collection, firebase),
    subscribe: (filter, observer) => subscribe(filter, observer, collection, firebase)
  };
}

async function add (items, collection, firestore) {
  if (!Array.isArray(items) || items.length === 0) {
    return true;
  };

  if (items.some(i => !i.id)) {
    throw new Error('A item "id" property is required to add items to the data repository');
  }

  const batch = firestore.batch();
  items.forEach(item => {
    const record = { ...item };
    const docRef = collection.doc(record.id);
    batch.set(docRef, record);
  });
  await batch.commit();

  return true;
}

async function query (filters, collection, firebase) {
  const query = mountQuery(filters, collection);

  const snapshot = await query.get();
  const items = convertSnapshotToItems(snapshot, firebase);

  return items;
};

function subscribe (filters, observer, collection, firebase) {
  const query = mountQuery(filters, collection);

  query.onSnapshot(snapshot => {
    const items = convertSnapshotToItems(snapshot, firebase);
    observer(items);
  });
}

function mountQuery (filters = [], collection) {
  let query = collection;
  filters.forEach(filter => {
    const { field, operator, value } = filter;
    query = query.where(field, operator, value);
  });
  return query;
}

function convertSnapshotToItems (snapshot, firebase) {
  return snapshot.docs.map(convertDocToItem, firebase);
}

function convertDocToItem (doc, firebase) {
  const item = {};
  const data = doc.data();

  for (const field in data) {
    const value = data[field] instanceof firebase.firestore.Firestore.Timestamp
      ? data[field].toDate()
      : data[field];
    item[field] = value;
  }

  return item;
};
