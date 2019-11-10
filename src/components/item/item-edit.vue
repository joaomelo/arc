<template>
  <FormEdit
    :item="item"
    #default="{ clone }"
    @save="save"
    @cancel="cancel"
  >
    <slot :clone="clone" />
  </FormEdit>
</template>

<script>
import { p } from '@/helpers/props.js';
import { mapStoreFunction } from '@/store/helpers.js';
import FormEdit from '@/components/forms/form-edit.vue';

export default {
  name: 'ItemEdit',
  components: { FormEdit },
  props: {
    itemCollection: p(String),
    itemId: p(String)
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
