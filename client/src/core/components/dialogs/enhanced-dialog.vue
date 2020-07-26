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
import { startLoading, showSuccess, showError } from '__cli/core/busui';
import FormDialog from './form-dialog';

export default {
  name: 'EnhancedForm',
  components: { FormDialog },
  props: {
    action: {
      type: Function,
      required: true
    },
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    save () {
      const stop = startLoading();
      this.action()
        .then(() => {
          if (this.message) {
            showSuccess(this.message);
          };
          this.$router.go(-1);
        })
        .catch(error => showError(error.message))
        .finally(() => stop());
    },
    cancel () {
      this.$router.go(-1);
    }
  }
};
</script>
