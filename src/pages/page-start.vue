<template>
  <div class="text-center">
    Loading data
  </div>
</template>

<script>
import { mapAllBinders } from '@/store/helpers.js';

export default {
  name: 'PageStart',
  computed: {
    loadSize () {
      return this.$store.getters.getLoadSize;
    }
  },
  watch: {
    loadSize: {
      handler (newSize, oldSize) {
        if (newSize === 0 && newSize < oldSize) {
          this.$router.push({ name: 'assetsList' });
        }
      }
    }
  },
  mounted () {
    const binders = mapAllBinders();
    binders.forEach(b => this.$store.dispatch(b));
  }
};
</script>
