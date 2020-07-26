<template>
  <v-overlay
    v-if="isLoading"
    z-index="10"
  >
    <v-progress-circular
      indeterminate
      size="64"
    />
  </v-overlay>
</template>

<script>
import { loaderState } from '../domain';

export default {
  name: 'OverlayLoading',
  data () {
    return {
      loaderState
    };
  },
  computed: {
    isLoading () {
      return this.loaderState.loadStatus === 'LOADING';
    }
  }
};
</script>
