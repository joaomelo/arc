<template>
  <v-btn type="submit">
    {{ label }}
  </v-btn>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style>

</style>
