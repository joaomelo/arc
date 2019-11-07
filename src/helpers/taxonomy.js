import { firstUpper, firstUpperPlural } from './string.js';

const itemTypes = [
  'asset',
  'result',
  'challenge',
  'team',
  'profile'
];

function mapStoreFunction (itemType, funcType) {
  const type = itemType[itemType.length - 1] === 's' ? itemType.slice(0, -1) : itemType;

  const functions = {
    getterCol: `get${firstUpperPlural(type)}`,
    getterSingle: `get${firstUpper(type)}`,
    binAction: `set${firstUpperPlural(type)}`,
    addAction: `add${firstUpper(type)}`,
    setAction: `set${firstUpper(type)}`,
    delAction: `del${firstUpper(type)}`
  };

  return functions[funcType];
}

export { itemTypes as it, mapStoreFunction };
