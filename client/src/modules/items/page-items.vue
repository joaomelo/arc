<template>
  <v-card flat>
    <BarItems :title="$attrs.title">
      <slot />
    </BarItems>
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
import BarItems from './bar-items';
import ListItems from './list-items';

export default {
  name: 'PageItems',
  components: { BarItems, ListItems }
};
</script>
