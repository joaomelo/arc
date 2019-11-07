<template>
  <FormEdit
    :item="item"
    :edit-fields="editFields"
    @save="save"
    @cancel="cancel"
  />
</template>

<script>
import { p } from '@/helpers/props.js';
import { mapStoreFunction } from '@/helpers/taxonomy.js';
import FormEdit from '@/components/forms/form-edit.vue';

export default {
  name: 'ItemEditor',
  components: {
    FormEdit
  },
  props: {
    itemCollection: p(String),
    itemId: p(String),
    editFields: p(Object)
  },
  data () {
    const isAdd = this.itemId === 'add';
    const itemGetter = this.$store.getters[mapStoreFunction(this.itemCollection, 'getterSingle')];
    return {
      item: isAdd ? {} : itemGetter(this.itemId),
      saveAction: mapStoreFunction(this.itemCollection, isAdd ? 'addAction' : 'setAction')
    };
  },
  methods: {
    cancel () {
      this.$router.go(-1);
    },
    save (newItem) {
      this.$store.dispatch(this.saveAction, newItem);
      this.$router.go(-1);
    }
  }
};
</script>
