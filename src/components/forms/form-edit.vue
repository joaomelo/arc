<template>
  <FormDialog
    @save="save"
    @cancel="cancel"
  >
    <component
      :is="editFields"
      :item="itemClone"
    />
  </FormDialog>
</template>

<script>
import { p } from '@/helpers/props.js';
import { cloneDeep } from 'lodash-es';
import FormDialog from './form-dialog.vue';

export default {
  name: 'FormEdit',
  components: {
    FormDialog
  },
  props: {
    item: p(Object),
    editFields: p(Object)
  },
  data () {
    return {
      itemClone: cloneDeep(this.item)
    };
  },
  methods: {
    cancel () {
      this.$emit('cancel');
    },
    save () {
      this.$emit('save', this.itemClone);
    }
  }
};
</script>
