import * as data from '__cli/../../package.json';
import { isProduction } from './env';

function appName () {
  const title = data.default.name;
  return title;
}

function appDescription () {
  const desc = data.default.description;
  return desc;
}

function appVersion () {
  const rawVersion = data.default.version;
  const prefix = 'v';
  const posfix = isProduction() ? '' : 'd';
  return prefix + rawVersion + posfix;
}

function appTitle () {
  const title = `${appName()} ${appVersion()}`;
  return title;
}

export {
  appName,
  appVersion,
  appTitle,
  appDescription
};
