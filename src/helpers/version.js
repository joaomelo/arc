import * as data from '@/../package.json';

function getVersion () {
  return data.default.version;
}

export { getVersion };
