<template>
  <v-alert
    v-if="errorMessage"
    type="error"
    :data-error="errorMessage.code"
  >
    {{ errorMessage.text }}
  </v-alert>
</template>

<script>
export default {
  name: 'MessageError',
  props: {
    errorMessage: {
      type: Object,
      default: null
    }
  }
};
</script>
