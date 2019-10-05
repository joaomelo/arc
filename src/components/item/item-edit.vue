<template>
  <BaseForm
    @save="save"
    @cancel="cancel"
  >
    <slot :item="item" />
  </BaseForm>
</template>

<script>
import { p } from '@/components/helpers/props.js';
import BaseForm from '@/components/base/base-form.vue';

export default {
  name: 'ItemEdit',
  components: {
    BaseForm
  },
  props: {
    itemId: p(String),
    getter: p(String),
    action: p(String)
  },
  data () {
    return {
      item: this.itemId === 'add' ? {} : this.$store.getters[this.getter](this.itemId)
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
