<template>
  <EnhancedDialog
    v-bind="$attrs"
    :action="() => save()"
    :message="message"
  >
    <slot :itemClone="itemClone" />
  </EnhancedDialog>
</template>

<script>
import { EnhancedDialog } from '__cli/core/components';

export default {
  name: 'PageItem',
  components: { EnhancedDialog },
  props: {
    itemId: {
      type: String,
      default: 'add'
    },
    collection: {
      type: Object,
      required: true
    }
  },
  data () {
    const outfit = {
      add: {
        message: this.$t('items.successfully-added'),
        itemClone: {},
        action: 'add'
      },
      update: {
        message: this.$t('items.successfully-updated'),
        itemClone: { ...this.collection.getItem(this.itemId) },
        action: 'update'
      }
    };
    const key = this.itemId === 'add' ? 'add' : 'update';

    return outfit[key];
  },
  methods: {
    save () {
      return this.collection[this.action](this.itemClone);
    }
  }
};
</script>
