<template>
  <v-card flat>
    <v-toolbar flat>
      <v-toolbar-title class="text-h5 font-weight-medium">
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <slot />
      <BtnAdd @add="$emit('add')" />
    </v-toolbar>
    <v-divider />
    <v-card-text>
      <div v-if="items.length > 0">
        <div
          v-for="item in items"
          :key="item.id"
          :item="item"
        >
          <!-- the item can be rendered whatever way wanted -->
          <!-- just use the renderItem slot to implement -->
          <!-- CardItem component is a helpful optional default -->
          <slot
            name="renderItem"
            :item="item"
          />
        </div>
      </div>
      <p v-else>
        {{ $t("items.no-items-found") }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { BtnAdd } from '__cli/core/components';

export default {
  name: 'PageItems',
  components: { BtnAdd },
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
