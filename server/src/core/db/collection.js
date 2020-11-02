import { db } from './bootstrap';

export const getCollection = name => db.collection(name);
