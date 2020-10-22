import { useState } from 'react';
import { store } from '__cli/core/redux';
import { request as apiRequest } from './client';

export const useRequest = (method, route, callback) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({});

  const request = async payload => {
    setLoading(true);
    setData({});
    setError('');
    try {
      const result = await apiRequest(method, route, payload);
      setData(result);
      callback && callback(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error, data };
};

export const useRequestDispatcher = (method, route, action) => useRequest(method, route, payload => store.dispatch(action(payload)));
