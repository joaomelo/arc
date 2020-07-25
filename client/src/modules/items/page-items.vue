<template>
  <v-card flat>
    <BarItems :title="title">
      <slot name="bar" />
    </BarItems>
    <v-divider />
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
import BarItems from './bar-items';

export default {
  name: 'PageItems',
  components: { BarItems },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
