<template>
  <span class="vld-parent">
    <Loading
      :active="loadSize > 0"
      :can-cancel="false"
      :is-full-page="true"
    />
  </span>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'WatchLoading',
  components: { Loading },
  computed: {
    loadSize () {
      return this.$store.getters.getLoadSize;
    }
  }
};
</script>
