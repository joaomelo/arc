import React, { useState } from 'react';
import { DialogCommand, ControlSelect, SaveBack } from '__cli/core/components';
import { useUpdatePreferences, usePreferences } from '../domain';

export const PagePreferences = () => {
  const preferences = usePreferences();
  const [newLocale, setNewLocale] = useState(preferences.locale);

  return (
    <DialogCommand
      useCommand={useUpdatePreferences}
      payload={{ locale: newLocale }}
      actions={<SaveBack />}
    >
      <ControlSelect label='locale' value={newLocale} onChange={setNewLocale} required/>
    </DialogCommand>
  );
};
