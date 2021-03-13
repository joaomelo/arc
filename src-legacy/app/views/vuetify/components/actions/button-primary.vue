<template>
  <v-btn
    :id="id | elementId('action')"
    type="submit"
  >
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style>

</style>
