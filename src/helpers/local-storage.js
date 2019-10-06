import { getVersion } from './version.js.js.js.js';

const versionKey = 'arc' + getVersion();
const isVersionRegistred = localStorage.getItem(versionKey);
if (!isVersionRegistred) {
  localStorage.clear();
  localStorage.setItem(versionKey);
}

function save (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function load (key) {
  return JSON.parse(localStorage.getItem(key));
}

export { save, load };
