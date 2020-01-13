<template>
  <FormDialog
    @save="save"
    @cancel="cancel"
  >
    <slot :clone="clone" />
  </FormDialog>
</template>

<script>
import { p } from '@/common/components-helpers';
import { cloneDeep } from 'lodash-es';
import FormDialog from './form-dialog.vue';

export default {
  name: 'FormEdit',
  components: { FormDialog },
  props: { item: p(Object) },
  data () {
    return {
      clone: cloneDeep(this.item)
    };
  },
  methods: {
    cancel () {
      this.$emit('cancel');
    },
    save () {
      this.$emit('save', this.clone);
    }
  }
};
</script>
