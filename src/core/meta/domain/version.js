import * as data from '@/../package.json';
import { appEnviroment } from './enviroment';

function appVersion () {
  return data.default.version;
}

function appPrettyVersion () {
  const rawVersion = appVersion();
  const prefix = 'v';
  const posfix = appEnviroment() === 'prod' ? '' : 'd';
  return prefix + rawVersion + posfix;
}

export { appPrettyVersion };
