import { i18n } from '@/i18n';

const assetsStatuses = [
  {
    id: 'active',
    title: i18n.t('fields.assets.status.active')
  },
  {
    id: 'blocked',
    title: i18n.t('fields.assets.status.blocked')
  },
  {
    id: 'closed',
    title: i18n.t('fields.assets.status.closed')
  }
];

function prettyStatus (id) {
  const status = assetsStatuses.find(s => s.id === id);
  return status ? status.title : undefined;
}

export { assetsStatuses, prettyStatus };
