export function adaptFirestore (config) {
  return {
    collection: name => collection(name, config)
  };
}

function collection (name, config) {
  const { firestore, firebase } = config;
  const collection = firestore.collection(name);

  return {
    queryItems: filters => queryItems(filters, collection, firebase),
    addItems: items => addItems(items, collection, firestore)
  };
}

async function addItems (items, collection, firestore) {
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

async function queryItems (filters = [], collection, firebase) {
  let query = collection;
  filters.forEach(filter => {
    const { field, operator, value } = filter;
    query = query.where(field, operator, value);
  });

  const snapshot = await query.get();

  const items = snapshot.docs.map(convertDocToItem, firebase);
  return items;
};

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
