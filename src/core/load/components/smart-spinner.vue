<template>
  <span class="vld-parent">
    <Loading
      :active="loadStatus === LOAD_STATES.LOADING"
      :can-cancel="false"
      :is-full-page="true"
    />
  </span>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import { controllerLoad, LOAD_STATES } from '../controllers';

export default {
  name: 'LoadSpinner',
  components: { Loading },
  data () {
    return {
      LOAD_STATES
    };
  },
  computed: {
    loadStatus () {
      return controllerLoad.state;
    }
  }
};
</script>
