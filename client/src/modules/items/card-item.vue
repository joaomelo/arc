<template>
  <v-card>
    <v-card-title>{{ item[titleField] }}</v-card-title>
    <v-card-subtitle>
      {{ item[subtitleField] }}
    </v-card-subtitle>
    <v-card-text
      v-if="$slots.details && !folded"
    >
      <slot name="details" />
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <BaseButton
        v-if="$slots.details"
        :icon="folded ? 'mdi-unfold-more-horizontal' : 'mdi-unfold-less-horizontal'"
        @click="folded = !folded"
      />
      <v-spacer />
      <BaseButton
        icon="mdi-pencil"
        @click="edit"
      />
      <BaseButton
        icon="mdi-delete"
        @click="del"
      />
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
import { BaseButton } from '__cli/core/components';
import { startLoading, showInfo, showError } from '__cli/core/busui';

export default {
  name: 'CardItem',
  components: { BaseButton },
  props: {
    item: {
      type: Object,
      required: true
    },
    collection: {
      type: Object,
      required: true
    },
    editRoute: {
      type: String,
      required: true
    },
    titleField: {
      type: String,
      default: 'name'
    },
    subtitleField: {
      type: String,
      default: 'id'
    }
  },
  data () {
    return {
      folded: true
    };
  },
  methods: {
    edit () {
      this.$router.push({ name: this.editRoute, params: { id: this.item.id } });
    },
    del () {
      const stop = startLoading();
      this.collection.del(this.item.id)
        .then(() => showInfo(this.$t('items.item-deleted')))
        .catch(error => showError(error.message))
        .finally(() => stop());
    }
  }
};
</script>
