<template>
  <v-text-field
    :error-messages="errors"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'TextBase',
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  }
};
</script>
