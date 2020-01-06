<template>
  <span class="vld-parent">
    <Loading
      :active="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    />
  </span>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import { isLoading } from '../domain';

export default {
  name: 'SmartSpinner',
  components: { Loading },
  computed: {
    isLoading () {
      return isLoading();
    }
  }
};

</script>
