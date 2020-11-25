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
        @click="delItem"
      />
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script>
import { BaseButton } from '@/shared/components';
import { showInfo, showError } from '@/shared/busui';

export default {
  name: 'CardItem',
  components: { BaseButton },
  props: {
    item: {
      type: Object,
      required: true
    },
    del: {
      type: Function,
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
    delItem () {
      // no loader is required since firestore
      // will give a offline fast response
      this.del(this.item.id)
        .then(() => showInfo(this.$t('items.item-deleted')))
        .catch(error => showError(error.message));
    }
  }
};
</script>
