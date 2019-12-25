import { i18n } from '@/i18n';

const statuses = [
  {
    id: 'active',
    title: i18n.t('fields.status.active')
  },
  {
    id: 'blocked',
    title: i18n.t('fields.status.blocked')
  },
  {
    id: 'closed',
    title: i18n.t('fields.status.closed')
  }
];

function prettyStatus (id) {
  const status = statuses.find(s => s.id === id);
  return status ? status.title : undefined;
}

export { statuses, prettyStatus };
