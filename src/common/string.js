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
  return email.substring(0, pos);
}

export { isString, extractUsernameFromEmail, firstUpper, firstUpperPlural };
