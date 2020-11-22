import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { request } from '__cli/core/api';

export const useCommand = myCommand => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dispatch = useDispatch();

  // the combination of isMounted and useEffect keep tracks of the
  // mount state of the component surrounding the hook.
  // it will avoid component state updates after it unmounts.
  // but has no affect on the actual myCommand execution.
  const isMounted = useRef(true);
  useEffect(() => () => { isMounted.current = false; }, []);

  const command = async payload => {
    // a subsequent call to command wile the last one is still pending will be ignored
    if (pending) return;

    setPending(true);
    setError('');
    setSuccess('');
    try {
      const result = await myCommand(payload, { dispatch, request });
      isMounted.current && setSuccess(result || true);
    } catch (error) {
      isMounted.current && setError(error.message);
    } finally {
      isMounted.current && setPending(false);
    }
  };

  return { command, pending, error, success };
};
