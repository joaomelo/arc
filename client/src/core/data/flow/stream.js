import { firedb } from '__cli/core/firebase';
import { Flow } from './flow';

class Stream extends Flow {
  constructor (options) {
    super();
    if (options) {
      this.connect(options);
    }
  }

  connect (options) {
    this.disconnect();

    this.collection = {
      name: options.collection,
      reference: firedb.collection(options.collection)
    };

    const query = this.createQuery(options.query || {});
    this.dataUnsub = query.onSnapshot({
      next: snapshot => {
        const items = this.convertDocsToItems(snapshot.docs, options.converter);
        this.subject.next(items);
      },
      error: error => console.error(error)
    });
  }

  createQuery ({ where, orderBy, limit }) {
    let query = this.collection.reference;

    if (where && Array.isArray(where)) {
      where.forEach(clause => {
        query = query.where(clause.field, clause.operator, clause.value);
      });
    }

    if (orderBy) {
      query = query.orderBy(orderBy.field, orderBy.sort);
    }

    if (limit) {
      query = query.limit(limit);
    }

    return query;
  }

  convertDocsToItems (docs, converter) {
    const items = docs.map(doc => {
      const basicItem = {
        id: doc.id,
        collection: this.collection.name,
        ...doc.data()
      };

      const item = converter ? converter(basicItem) : basicItem;
      return item;
    });

    return items;
  }
}

export { Stream };
