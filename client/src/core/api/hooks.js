import { useState, useEffect, useRef } from 'react';
import { store } from '__cli/core/redux';
import { request as apiRequest } from './client';

export const useRequest = ({ method, route, message, callback }) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [data, setData] = useState({});
  const isMounted = useRef(true);

  useEffect(() => () => { isMounted.current = false; }, []);

  const request = async payload => {
    if (pending) return;
    setPending(true);
    setData({});
    setError('');
    setSuccess('');
    try {
      const result = await apiRequest(method, route, payload);
      if (isMounted.current) {
        setData(result);
        setSuccess(message || 'The request was a success');
      };
      callback && callback(result);
    } catch (error) {
      if (isMounted.current) setError(error.message);
    } finally {
      if (isMounted.current) setPending(false);
    }
  };

  return { request, pending, error, data, success };
};

export const useRequestDispatcher = ({ method, route, message, callback }) => {
  const dispatch = payload => store.dispatch(callback(payload));

  const config = {
    method,
    route,
    message,
    callback: dispatch
  };

  return useRequest(config);
};
