import moment from 'moment';

import { i18n } from '@/i18n';

function daterangeToString (range) {
  const hasRange = range && range.start && range.end;
  const f = d => moment(d).format(i18n.t('calendar.date'));
  return hasRange ? `${f(range.start)} - ${f(range.end)}` : '';
}

export { daterangeToString };
