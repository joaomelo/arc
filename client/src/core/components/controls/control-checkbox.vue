<template>
  <div class="form-check">
    <ControlWrapper
      #default="{ controlId }"
    >
      <input
        :id="controlId"
        type="checkbox"
        class="form-check-input"
        :checked="value"
        :readonly="isReadonly"
        @input="update"
      >
      <label
        class="form-check-label"
        :for="controlId"
      >
        {{ label }}
      </label>
    </ControlWrapper>
  </div>
</template>

<script>
import ControlWrapper from './control-wrapper.vue';
import { p } from '__cli/common/components-helpers';

export default {
  name: 'ControlCheckbox',
  components: {
    ControlWrapper
  },
  props: {
    label: p(String),
    value: p(Boolean, false),
    isReadonly: p(Boolean, false)
  },
  methods: {
    update (event) {
      this.$emit('input', event.target.checked);
    }
  }
};
</script>
