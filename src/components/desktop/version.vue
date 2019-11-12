<template>
  <span id="version">
    {{ tag }}
  </span>
</template>

<script>
import { getVersion } from '@/helpers/version.js';

export default {
  name: 'Version',
  data () {
    return {
      tag: formatVersionTag(getVersion())
    };
  }
};

function formatVersionTag (version) {
  const prefix = 'v';
  const posfix = process.env.NODE_ENV === 'development'
    ? 'd'
    : '';
  return prefix + version + posfix;
}

</script>
