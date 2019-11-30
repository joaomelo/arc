<template>
  <span id="version">
    {{ tag }}
  </span>
</template>

<script>
import * as data from '@/../package.json';
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
  const posfix = process.env.NODE_ENV === 'development'
    ? 'd'
    : '';
  return prefix + version + posfix;
}

</script>
