<template>
  <div class="form-group">
    <label :for="controlId">{{ label }}</label>
    <slot :controlId="controlId" />
  </div>
</template>

<script>
import kebabCase from 'lodash-es';
import { p } from '@/helpers/props.js';

export default {
  name: 'ControlWrapper',
  props: {
    label: p(String)
  },
  data () {
    return {
      controlId: kebabCase(`input-${this.label}`)
    };
  }
};
</script>
