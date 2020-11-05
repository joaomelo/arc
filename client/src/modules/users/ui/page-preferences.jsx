import React, { useState } from 'react';
import { DialogCommand, SaveBack } from '__cli/core/components';
import { updatePreferencesCommand, usePreferences } from '../domain';
import { SelectLocale } from './select-locale';

export const PagePreferences = () => {
  const preferences = usePreferences();
  const [newLocale, setNewLocale] = useState(preferences.locale);

  return (
    <DialogCommand
      myCommand={updatePreferencesCommand}
      payload={{ locale: newLocale }}
      actions={<SaveBack />}
    >
      <SelectLocale value={newLocale} onChange={setNewLocale} required/>
    </DialogCommand>
  );
};
