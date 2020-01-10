<template>
  <span id="version">{{ versionTag }}</span>
</template>

<script>
import { appPrettyVersion } from '../domain';

export default {
  name: 'Version',
  data () {
    return {
      versionTag: appPrettyVersion()
    };
  }
};

</script>
