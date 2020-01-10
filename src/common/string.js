function isString (value) {
  return typeof value === 'string';
}

function firstUpper (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstUpperPlural (str) {
  return `${firstUpper(str)}s`;
}

export { isString, firstUpper, firstUpperPlural };
