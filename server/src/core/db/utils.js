import { ObjectID } from 'mongodb';
import { db } from './bootstrap';

export const getCollection = name => db.collection(name);

export const getDocById = async (collection, stringId) => {
  const id = new ObjectID(stringId);
  const doc = await collection.findOne(id);
  return doc;
};

export const updateDocById = async (collection, id, doc) => {
  const _id = typeof id === 'string' ? new ObjectID(id) : id;
  await collection.updateOne({ _id }, { $set: doc });
};
