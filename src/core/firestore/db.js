import 'firebase/firestore';
import { fireApp } from '@src/core/fireapp';

const db = fireApp.firestore();
export { db };
