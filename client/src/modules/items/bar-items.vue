<template>
  <v-toolbar flat>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer />
    <slot />
  </v-toolbar>
</template>

<script>
export default {
  name: 'BarItems',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
