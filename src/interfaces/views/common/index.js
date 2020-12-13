import { kebabCase } from 'lodash-es';

export function textToElementId (text, prefix = '') {
  const main = `${prefix}-${text}`;
  const id = kebabCase(main).toLowerCase();
  return id;
}
