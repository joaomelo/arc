<template>
  <FormDialog
    v-bind="$attrs"
    @save="save"
    @cancel="cancel"
  >
    <slot :itemClone="itemClone" />
  </FormDialog>
</template>

<script>
import { showSuccess, showError } from '__cli/core/busui';
import { FormDialog } from '__cli/core/components';

export default {
  name: 'PageItem',
  components: { FormDialog },
  props: {
    id: {
      type: String,
      default: 'add'
    },
    collection: {
      type: Object,
      required: true
    },
    defaultItem: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    const outfit = {
      add: {
        message: this.$t('items.successfully-added'),
        itemClone: { ...this.defaultItem },
        action: 'add'
      },
      update: {
        message: this.$t('items.successfully-updated'),
        itemClone: { ...this.collection.getItem(this.id) },
        action: 'update'
      }
    };
    const key = this.id === 'add' ? 'add' : 'update';

    return outfit[key];
  },
  methods: {
    save () {
      this.collection[this.action](this.itemClone)
        .then(() => showSuccess(this.message))
        .catch(error => showError(error.message));
      this.$router.go(-1);
    },
    cancel () {
      this.$router.go(-1);
    }
  }
};
</script>
