<template>
  <v-text-field
    :id="controlId"
    :label="label"
  />
</template>

<script>
import { camelCase, upperFirst } from 'lodash-es';

export default {
  name: 'ControlText',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    controlId () {
      const computerLabel = upperFirst(camelCase(this.label));
      return `control${computerLabel}`;
    }
  }
};
</script>
