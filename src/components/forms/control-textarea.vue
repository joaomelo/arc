<template>
  <ControlWrapper
    #default="{ controlId }"
    :label="label"
  >
    <textarea
      :id="controlId"
      class="form-control"
      rows="3"
      :value="value"
      @input="update"
    />
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
    value: p(String, '')
  },
  methods: {
    update (event) {
      this.$emit('input', event.target.value);
    }
  }

};
</script>
