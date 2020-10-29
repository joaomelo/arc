import { i18n } from '__cli/core/i18n';
import { updatePreferences } from './slice';

export const updatePreferencesCommand = async (payload, { dispatch }) => {
  // await request...
  dispatch(updatePreferences(payload));
  return i18n.t('users.preferences-updated');
};
