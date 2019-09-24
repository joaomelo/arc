<template>
  <span id="version">
    {{ tag }}
  </span>
</template>

<script>
import * as data from '@/../package.json';

export default {
  name: 'AppVersion',
  data () {
    return {
      tag: formatVersionTag(data.default.version)
    };
  }
};

function formatVersionTag (version) {
  const prefix = 'v';
  const posfix = process.env.NODE_ENV === 'development'
    ? '-dev'
    : '';
  return prefix + version + posfix;
}

</script>
