import 'client/src/core/firestore/firebase/firestore';
import { fireApp } from '__cli/core/auth/services/client/src/core/fireapp';

const db = fireApp.firestore();
export { db };
