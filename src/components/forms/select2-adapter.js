import JQuery from 'jquery';
import 'select2/dist/js/select2.min.js';

import { i18n } from '@/i18n';

function initSelect2 (select, isTaggable, isMultiple, values, options, update) {
  const pureValues = JSON.parse(JSON.stringify(values));
  const pureOptions = JSON.parse(JSON.stringify(options));
  const data = convertToData(pureValues, pureOptions, isMultiple);

  const placeholderKey = isTaggable ? 'placeholders.enter' : 'placeholders.select';
  const placeholderPlural = isMultiple ? 2 : 1;

  JQuery(select).select2({
    theme: 'bootstrap4',
    placeholder: i18n.tc(placeholderKey, placeholderPlural),
    tags: isTaggable,
    tokenSeparators: [',', ' '],
    data
  });
  JQuery(select).on('change', update);
}

function convertToData (values, options, isMultiple) {
  if (!options || !Array.isArray(options)) return;

  let hasSelected = false;
  const data = options.map(option => {
    const dataItem = {
      id: option.id || option,
      text: option.title || option
    };
    if (isOptionSelected(option, values)) {
      hasSelected = true;
      dataItem.selected = 'selected';
    };
    return dataItem;
  });

  if (!hasSelected && !isMultiple) {
    data.unshift({
      id: '',
      text: ''
    });
  }

  return data;
}

function isOptionSelected (option, values) {
  let result = false;

  if (option && values) {
    const isArray = Array.isArray(values);
    const oid = option.id || option;

    if (isArray && values.find(v => v === oid || v.id === oid)) {
      result = true;
    }
    if (!isArray && (oid === values || oid === values.id)) {
      result = true;
    }
  }

  return result;
}

function extractSelect2Value (select, options, isMultiple, isObjectDriven) {
  const selectedIds = JQuery(select).select2('data').map(v => v.id);
  if (selectedIds.length === 0) return;

  const values = isObjectDriven ? options.filter(o => selectedIds.includes(o.id)) : selectedIds;

  return isMultiple ? values : values[0];
}

export { initSelect2, extractSelect2Value };
