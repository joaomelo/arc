<template>
  <v-card flat>
    <v-toolbar flat>
      <v-toolbar-title class="text-h5 font-weight-medium">
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <slot />
    </v-toolbar>
    <v-divider />
    <v-card-text>
      <ListItems
        :view="$attrs.view"
        :items="$attrs.items"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import ListItems from './list-items';

export default {
  name: 'PageItems',
  components: { ListItems },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
