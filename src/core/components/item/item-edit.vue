<template>
  <FormEdit
    #default="{ clone }"
    :item="item"
    @save="save"
    @cancel="cancel"
  >
    <slot :clone="clone" />
  </FormEdit>
</template>

<script>
import { p } from '@/common/components-helpers';
// import { mapStoreFunction } from '@/data/store/helpers';
import { FormEdit } from '../forms';

export default {
  name: 'ItemEdit',
  components: { FormEdit },
  props: {
    itemCollection: p(String),
    itemId: p(String)
  },
  data () {
    // const isAdd = this.itemId === 'add';
    // const itemGetter = this.$store.getters[mapStoreFunction(this.itemCollection, 'getterSingle')];
    // return {
    //   item: isAdd ? { collection: this.itemCollection } : itemGetter(this.itemId),
    //   saveAction: mapStoreFunction(this.itemCollection, isAdd ? 'addAction' : 'setAction')
    // };
  }
};
</script>
