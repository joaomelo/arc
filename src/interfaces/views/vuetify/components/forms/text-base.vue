<template>
  <!--
    apparently if 'id' is passed through $attrs, vuetify will set the same id
    both on the wrapper div and in the input element.
  -->
  <v-text-field
    :id="id"
    :error-messages="errors"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: 'TextBase',
  props: {
    id: {
      type: String,
      required: true
    },
    errors: {
      type: Array,
      default: () => []
    }
  }
};
</script>
