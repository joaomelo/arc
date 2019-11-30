<template>
  <ControlSelect
    v-model="internalValue"
    :label="$t('fields.status.status')"
    :is-required="true"
    :options="statuses"
    @input="update"
  />
</template>

<script>
import ControlSelect from './control-select.vue';
import { statuses } from '@/components/common/status.js';
import { p } from '@/components/common/props.js';

export default {
  name: 'ControlStatus',
  components: {
    ControlSelect
  },
  props: {
    value: p(String, null)
  },
  data () {
    return {
      statuses: statuses,
      internalValue: this.value
    };
  },
  methods: {
    update (value) {
      this.$emit('input', value);
    }
  }
};
</script>
