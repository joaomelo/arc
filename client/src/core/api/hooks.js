import { useState, useEffect, useRef } from 'react';
import { store } from '__cli/core/redux';
import { request as apiRequest } from './client';

export const useRequest = (method, route, callback) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({});
  const isMounted = useRef(true);

  useEffect(() => () => { isMounted.current = false; }, []);

  const request = async payload => {
    if (pending) return;
    setPending(true);
    setData({});
    setError('');
    try {
      const result = await apiRequest(method, route, payload);
      if (isMounted.current) setData(result);
      callback && callback(result);
    } catch (error) {
      if (isMounted.current) setError(error.message);
    } finally {
      if (isMounted.current) setPending(false);
    }
  };

  return { request, pending, error, data };
};

export const useRequestDispatcher = (method, route, action) => useRequest(method, route, payload => store.dispatch(action(payload)));
