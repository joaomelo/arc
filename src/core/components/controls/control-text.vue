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
      :readonly="isReadonly"
      :required="isRequired"
      :placeholder="$tc('placeholders.enter', 1)"
      @input="update"
    >
  </ControlWrapper>
</template>

<script>
import ControlWrapper from './control-wrapper.vue';
import { p } from '@/common';

export default {
  name: 'ControlText',
  components: {
    ControlWrapper
  },
  props: {
    label: p(String),
    value: p(String, null),
    isReadonly: p(Boolean, false),
    isRequired: p(Boolean, false)
  },
  methods: {
    update (event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>
