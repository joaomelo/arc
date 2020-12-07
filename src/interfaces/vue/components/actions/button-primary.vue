<template>
  <v-btn
    :id="id"
    type="submit"
  >
    {{ label }}
  </v-btn>
</template>

<script>
import { camelCase, upperFirst } from 'lodash-es';

export default {
  name: 'ButtonPrimary',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    id () {
      const computerLabel = upperFirst(camelCase(this.label));
      return `action${computerLabel}`;
    }
  }
};
</script>

<style>

</style>
