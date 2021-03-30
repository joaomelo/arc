import { BehaviorSubject } from 'rxjs';
import { arcs } from '../../../../tests/fixtures';

const indexedArcs = arcs.reduce((acc, arc) => {
  acc[arc.id] = { ...arc };
  return acc;
}, {});

export function createArcsStore () {
  const state = {
    arcs: indexedArcs
  };

  const getters = {
    get allItems () {
      return Object.values(state.arcs);
    }
  };

  const subject = new BehaviorSubject(getters);

  return {
    state,
    getters,
    subscribe: observer => {
      const subscription = subject.subscribe(observer);
      return () => subscription.unsubscribe();
    },
    actions: {
      addItem (arc) {
        state.arcs[arc.id] = { ...arc };
        subject.next(getters);
      }
    }
  };
}
