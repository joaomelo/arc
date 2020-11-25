import { ObjectID } from 'mongodb';
import { db } from './bootstrap';

export const getCollection = name => db.collection(name);

export const insertDocInCollection = (collection, doc) => collection.insertOne(doc);

export function updateDocByIdInCollection (collection, id, doc) {
  const _id = typeof id === 'string' ? new ObjectID(id) : id;
  return collection.updateOne({ _id }, { $set: doc });
};

export function getDocByIdInCollection (collection, id) {
  const _id = new ObjectID(id);
  return collection.findOne(_id);
};

export const getDocByQueryInCollection = (collection, query) => collection.findOne(query);

export const createDataFunctions = collectionName => {
  return {
    insertDoc: doc => insertDocInCollection(getCollection(collectionName), doc),
    updateDocById: (id, doc) => updateDocByIdInCollection(getCollection(collectionName), id, doc),
    getDocById: id => getDocByIdInCollection(getCollection(collectionName), id),
    getDocByQuery: query => getDocByQueryInCollection(getCollection(collectionName), query)
  };
};
