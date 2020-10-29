import React, { useState } from 'react';
import { DialogCommand, ControlSelect, SaveBack } from '__cli/core/components';
import { updatePreferencesCommand, usePreferences } from '../domain';

export const PagePreferences = () => {
  const preferences = usePreferences();
  const [newLocale, setNewLocale] = useState(preferences.locale);

  return (
    <DialogCommand
      myCommand={updatePreferencesCommand}
      payload={{ locale: newLocale }}
      actions={<SaveBack />}
    >
      <ControlSelect label='locale' value={newLocale} onChange={setNewLocale} required/>
    </DialogCommand>
  );
};
