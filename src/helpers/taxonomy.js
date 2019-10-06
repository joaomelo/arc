import { firstUpper, firstUpperPlural } from './string.js';

function mapStoreFunction (itemType, funcType) {
  const functions = {
    getterCol: `get${firstUpperPlural(itemType)}`,
    getterSingle: `get${firstUpper(itemType)}`,
    binAction: `set${firstUpperPlural(itemType)}`,
    addAction: `add${firstUpper(itemType)}`,
    setAction: `set${firstUpper(itemType)}`,
    delAction: `del${firstUpper(itemType)}`
  };

  return functions[funcType];
}

export { mapStoreFunction };
