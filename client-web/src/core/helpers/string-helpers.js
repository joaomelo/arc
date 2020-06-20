function isString (value) {
  return typeof value === 'string';
}

function firstUpper (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function firstUpperPlural (str) {
  return `${firstUpper(str)}s`;
}

function extractUsernameFromEmail (email) {
  const pos = email.indexOf('@');
  const username = email.substring(0, pos);
  return username;
}

export { isString, firstUpper, firstUpperPlural, extractUsernameFromEmail };
