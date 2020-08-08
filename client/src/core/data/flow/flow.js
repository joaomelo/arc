import { BehaviorSubject } from 'rxjs';

class Flow {
  items = [];
  subject = new BehaviorSubject([]);
  dataUnsub = null;

  constructor () {
    this.subject.subscribe(items => { this.items = items; });
  }

  subscribe (observer) {
    return this.subject.subscribe(observer);
  }

  getItems () {
    return this.items;
  }

  getItem (id) {
    return this.items ? this.items.find(item => item.id === id) : null;
  }

  disconnect () {
    if (!this.dataUnsub) return;

    // disable connection to data observable
    this.dataUnsub();
    this.dataUnsub = null;

    // clean items
    this.subject.next([]);
  }
}

export { Flow };
