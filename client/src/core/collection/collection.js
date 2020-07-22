import { BehaviorSubject, Subject } from 'rxjs';
import { FirestoreAdapter } from './firestore-adapter';

class Collection {
  constructor (name, options) {
    this.name = name;
    this.collectionUpdatedSignal = new BehaviorSubject([]);
    this.collectionUpdatedSignal.subscribe(items => { this.items = items; });

    if (options) {
      this.connect(options);
    }
  }

  connect (options) {
    validateOptions(this.name, options);

    this.disconnect();

    // the adapterSignal subject is descardable at every disconnect from the store
    // but the collectionSignal is permanent, so it can sustain
    // subscriptions to the collection even after reconnections
    this.adapterUpdateSignal = new Subject();
    this.adapterUpdateSignalSubscription = this.adapterUpdateSignal.subscribe(items => {
      this.collectionUpdatedSignal.next(items);
    });
    this.adapter = new FirestoreAdapter({
      options,
      name: this.name,
      adapterUpdateSignal: this.adapterUpdateSignal
    });
  }

  disconnect () {
    if (!this.adapter) return;

    // disable adapter setup
    this.adapterUpdateSignalSubscription.unsubscribe();
    this.adapterUpdateSignal.complete();
    this.adapter = null;

    // clean items and signal empty array state after disconnection
    this.collectionUpdatedSignal.next([]);
  }

  subscribe (observer) {
    return this.collectionUpdatedSignal.subscribe(observer);
  }

  getItems () {
    return this.items;
  }

  getItem (id) {
    return this.items.find(item => item.id === id);
  }

  add (item) {
    this.checkConnectionAndThrow();
    return this.adapter.add(item);
  }

  set (item) {
    this.checkConnectionAndThrow();
    return this.adapter.set(item);
  }

  update (item) {
    this.checkConnectionAndThrow();
    return this.adapter.update(item);
  }

  del (id) {
    this.checkConnectionAndThrow();
    return this.adapter.del(id);
  }

  checkConnectionAndThrow () {
    if (!this.adapter) {
      throw new Error('Data manipulation is impossible without an adapter connection');
    }
  }
}

function validateOptions (name, options) {
  // check save mode option
  const validSaveModes = ['safe', 'default'];
  const saveMode = options.saveMode || 'default';
  if (!validSaveModes.includes(saveMode)) {
    throw new TypeError('saveMode option value must equal "default" or "safe"');
  }
}

export { Collection };
