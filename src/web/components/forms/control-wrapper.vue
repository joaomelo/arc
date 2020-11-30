<template>
  <div>
    <slot :id="controlId" />
  </div>
</template>

<script>
import { camelCase, upperFirst } from 'lodash-es';

export default {
  name: 'ControlWrapper',
  props: {
    label: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    controlId () {
      return `control${upperFirst(camelCase(label))}`;
    }
  }
};
</script>
