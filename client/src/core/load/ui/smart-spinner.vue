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
import { subscribe } from '@joaomelo/bus';
import { LOAD_STATUS, LOAD_EVENTS } from '../common';

export default {
  name: 'SmartSpinner',
  components: { Loading },
  data () {
    return {
      isLoading: false
    };
  },
  created () {
    const updateLoading = ({ status }) => {
      this.isLoading = status === LOAD_STATUS.LOADING;
    };
    subscribe(LOAD_EVENTS.LOAD_STATUS_CHANGED, updateLoading, true);
  }
};

</script>
