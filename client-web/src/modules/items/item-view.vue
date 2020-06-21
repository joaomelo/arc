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
    <v-divider v-if="$slots.actions" />
    <v-card-actions>
      <v-spacer />
      <slot name="actions" />
      <v-btn
        v-if="$slots.details"
        @click="folded = !folded"
      >
        <v-icon>
          {{ folded ? "unfold-more-horizontal" : "unfold-less-horizontal" }}
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ItemView',
  props: {
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
