import { useSelector } from 'react-redux';

const selectPreferences = state => state.preferences;
export const usePreferences = () => useSelector(selectPreferences);
