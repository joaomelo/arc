<template>
  <span id="version">
    {{ tag }}
  </span>
</template>

<script>
import * as data from '@/../package.json';
import { appMode } from '@/helpers/enviroment.js';

export default {
  name: 'Version',
  data () {
    return {
      tag: getVersionTag()
    };
  }
};

function getVersionTag () {
  const version = data.default.version;
  const prefix = 'v';
  const posfix = appMode() === 'prod' ? '' : appMode();
  return prefix + version + posfix;
}

</script>
