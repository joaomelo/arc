<template>
  <v-alert
    v-if="error"
    type="error"
    :data-error="error.code"
  >
    {{ $t(error.description) }}
  </v-alert>
</template>

<script>
export default {
  name: 'MessageError',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
};
</script>
