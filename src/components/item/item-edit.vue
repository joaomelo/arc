<template>
  <BaseForm
    @save="save"
    @cancel="cancel"
  >
    <slot />
  </BaseForm>
</template>

<script>
import BaseForm from '@/components/base/base-form.vue';
import { p } from '@/components/helpers/props.js';

export default {
  name: 'ItemEdit',
  components: {
    BaseForm
  },
  props: {
    id: p(String)
  },
  methods: {
    cancel () {
      this.$router.go(-1);
    },
    save () {
      console.log(this.id);
      this.$router.go(-1);
    }
  }
};
</script>
