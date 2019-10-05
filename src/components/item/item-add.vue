<template>
  <BaseButton
    :class="['btn-primary', 'btn-block']"
    @click="add"
  >
    add {{ itemType }}
  </BaseButton>
</template>

<script>
import { p } from '@/components/helpers/props.js';
import BaseButton from '@/components/base/base-button.vue';

export default {
  name: 'ItemAdd',
  components: {
    BaseButton
  },
  props: {
    itemType: p(String)
  },
  methods: {
    add () {
      this.$router.push({ name: `${this.itemType}Edit`, params: { itemId: 'add' } });
    }
  }
};
</script>
