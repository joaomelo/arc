<template>
  <v-alert
    v-if="message"
    :type="type"
  >
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  name: 'MessageBase',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: String,
      default: null
    }
  }
};
</script>
