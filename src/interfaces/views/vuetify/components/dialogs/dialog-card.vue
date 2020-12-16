<template>
  <v-card
    v-bind="$attrs"
  >
    <v-card-title>
      <slot name="header" />
    </v-card-title>

    <v-card-text>
      <slot />
    </v-card-text>

    <v-card-actions class="justify-end">
      <slot name="footer" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DialogCard'
};
</script>
