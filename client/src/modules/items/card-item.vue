<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle v-if="subtitle">
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-text
      v-if="$slots.details && !folded"
    >
      <slot name="details" />
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn
        v-if="$slots.details"
        icon
        @click="folded = !folded"
      >
        <v-icon>
          {{ folded ? "mdi-unfold-more-horizontal" : "mdi-unfold-less-horizontal" }}
        </v-icon>
      </v-btn>
      <v-spacer />
      <BaseButton
        icon="mdi-pencil"
        @click="$emit('edit', id)"
      />
      <BaseButton
        icon="mdi-delete"
        @click="$emit('del', id)"
      />
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
import { BaseButton } from '__cli/core/components';

export default {
  name: 'CardItem',
  components: { BaseButton },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      folded: true
    };
  }
};
</script>
