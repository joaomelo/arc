import { firedb } from '__cli/core/firebase';
import { createFixture } from './fixture';

function loadFixture () {
  const dbFixture = createFixture();
  for (const property in dbFixture) {
    const collection = firedb.collection(property);
    dbFixture[property].forEach(item => {
      const docRef = collection.doc(item.id);
      docRef.set(item.doc);
    });
  }
}

export { loadFixture };
