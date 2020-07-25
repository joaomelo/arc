<template>
  <FormDialog
    :title="title"
    @save="save"
    @cancel="cancel"
  >
    <slot :itemClone="itemClone" />
  </FormDialog>
</template>

<script>
import { FormDialog } from '__cli/core/components';

export default {
  name: 'PageItem',
  components: { FormDialog },
  props: {
    title: {
      type: String,
      default: ''
    },
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
    return {
      itemClone: this.itemId === 'add' ? {} : { ...this.collection.getItem(this.itemId) }
    };
  },
  methods: {
    cancel () {
      this.$router.go(-1);
    },
    save () {
      const action = this.itemId === 'add' ? 'add' : 'update';
      this.collection[action](this.itemClone);
      this.$router.go(-1);
    }
  }
};
</script>
