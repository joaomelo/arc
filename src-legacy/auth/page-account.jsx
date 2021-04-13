import { useTranslation } from 'react-i18next';
import { DialogTabs } from '@/shared/components';
import { DialogUpdateEmail } from './dialog-update-email';
import { DialogUpdatePassword } from './dialog-update-password';

export function PageAccount () {
  const { t } = useTranslation();

  return (
    <DialogTabs>
      <DialogUpdateEmail header={t('auth.email-update')}/>
      <DialogUpdatePassword header={t('auth.password-update')}/>
    </DialogTabs>
  );
}
