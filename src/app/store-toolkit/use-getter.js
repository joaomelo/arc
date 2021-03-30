import { useState, useEffect } from 'react';

export function useGetter (store, getter, initialValue = null) {
  const [value, setValue] = useState(initialValue);

  const observer = getters => setValue(getters[getter]);
  const subscribe = () => store.subscribe(observer);
  useEffect(subscribe, [store, getter]);

  return value;
}
