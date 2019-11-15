<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <input
      :id="controlId"
      type="text"
      class="form-control"
      :value="value"
      :readonly="readOnly"
      @input="update"
    >
  </ControlWrapper>
</template>

<script>
import ControlWrapper from './control-wrapper.vue';
import { p } from '@/helpers/props.js';

export default {
  name: 'ControlText',
  components: {
    ControlWrapper
  },
  props: {
    label: p(String),
    value: p(String, ''),
    readOnly: p(Boolean, false)
  },
  methods: {
    update (event) {
      this.$emit('input', event.target.value);
    }
  }

};
</script>
