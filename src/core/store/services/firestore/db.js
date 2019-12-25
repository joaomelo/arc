import 'firebase/firestore';
import { fireApp } from '@/core/fireapp';

const db = fireApp.firestore();
export { db };
