<template>
  <BaseForm
    @save="save"
    @cancel="cancel"
  >
    <slot :item="item" />
  </BaseForm>
</template>

<script>
import { p } from '@/helpers/props.js';
import { mapStoreFunction } from '@/helpers/taxonomy.js';
import BaseForm from '@/components/base/base-form.vue';

export default {
  name: 'ItemEdit',
  components: {
    BaseForm
  },
  props: {
    itemType: p(String),
    itemId: p(String)
  },
  data () {
    const isAdd = this.itemId === 'add';
    const getter = mapStoreFunction(this.itemType, 'getterSingle');

    return {
      item: isAdd ? {} : this.$store.getters[getter](this.itemId),
      action: mapStoreFunction(this.itemType, isAdd ? 'addAction' : 'setAction')
    };
  },
  methods: {
    cancel () {
      this.$router.go(-1);
    },
    save () {
      this.$store.dispatch(this.action, this.item);
      this.$router.go(-1);
    }
  }
};
</script>
