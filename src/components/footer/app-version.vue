<template>
  <div id="version">
    {{ tag }}
  </div>
</template>
<script>
import * as data from '@/../package.json';

export default {
  name: 'AppVersion',
  data () {
    return {
      tag: calcVersionTag(data.default.version)
    };
  }
};

function calcVersionTag (version) {
  const prefix = 'arc v';
  const posfix = process.env.NODE_ENV === 'development'
    ? '-dev'
    : '';
  return prefix + version + posfix;
}

</script>
