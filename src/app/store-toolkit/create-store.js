import { BehaviorSubject } from 'rxjs';

export function createStore (config) {
  const { state, getters, actions } = config;

  const subject = new BehaviorSubject(getters);
  const next = () => subject.next(getters);
  const subscribe = observer => {
    const subscription = subject.subscribe(observer);
    return () => subscription.unsubscribe();
  };

  const store = {
    state,
    getters,
    subscribe,
    actions: enhanceActions(actions, next)
  };

  return store;
}

function enhanceActions (actions, next) {
  const enhancedActions = {};

  const entries = Object.entries(actions);
  entries.forEach(([key, action]) => {
    enhancedActions[key] = (...args) => {
      action(...args);
      next();
    };
  });

  return enhancedActions;
}
