import { useState, useEffect } from 'react';

export function useGetter (store, getter) {
  const [value, setValue] = useState(null);

  const observer = getters => getters[getter] !== value && setValue(getters[getter]);
  const subscribe = () => store.subscribe(observer);

  useEffect(subscribe);

  return value;
}
