<template>
  <div class="form-group">
    <label :for="controlId">{{ label }}</label>
    <slot :controlId="controlId" />
  </div>
</template>

<script>
import { kebabCase } from 'lodash';
export default {
  name: 'ControlWrapper',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      controlId: kebabCase(`input-${this.label}`)
    };
  }
};
</script>
