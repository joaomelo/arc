<template>
  <FormDialog
    v-bind="$attrs"
    @save="save"
    @cancel="cancel"
  >
    <slot />
  </FormDialog>
</template>

<script>
import { showSuccess, showError } from '@/shared/busui';
import { FormDialog } from '@/shared/components';

export default {
  name: 'PageItem',
  components: { FormDialog },
  props: {
    action: {
      type: Function,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    save () {
      const message = this.$t('items.successfully-saved');
      this.action(this.item)
        .then(() => showSuccess(message))
        .catch(error => showError(error.message));
      this.$router.go(-1);
    },
    cancel () {
      this.$router.go(-1);
    }
  }
};
</script>
