<template>
  <FormDialog
    @save="save"
    @cancel="cancel"
  >
    <slot :item="item" />
  </FormDialog>
</template>

<script>
import { p } from '@/common/components-helpers';
import FormDialog from './form-dialog.vue';

export default {
  name: 'FormEdit',
  components: {
    FormDialog
  },
  props: {
    saveAction: p(Function),
    fetchAction: p(Function)
  },
  data () {
    return {
      item: this.fetchAction()
    };
  },
  methods: {
    cancel () {
      this.$router.go(-1);
    },
    save () {
      this.saveAction(this.item);
      this.$router.go(-1);
    }
  }
};
</script>
