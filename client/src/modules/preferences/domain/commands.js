import { useDispatch } from 'react-redux';
import { updatePreferences } from './slice';

export const useUpdatePreferences = () => {
  const dispatch = useDispatch();
  return {
    request: payload => dispatch(updatePreferences(payload))
  };
};
