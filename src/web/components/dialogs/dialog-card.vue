<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <slot />
    </v-card-text>
    <v-card-actions>
      <slot name="footer" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DialogCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
