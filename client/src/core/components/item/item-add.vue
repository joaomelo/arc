<template>
  <BaseButton
    :class="['btn-primary', 'btn-block']"
    @click="add"
  >
    {{ $t('forms.new',{ col: $tc(`collections.${itemType}`, 1) }) }}
  </BaseButton>
</template>

<script>
import BaseButton from '@src/components/base/base-button.vue';
import { p } from '@src/common/components-helpers';

export default {
  name: 'ItemAdd',
  components: {
    BaseButton
  },
  props: { itemType: p(String) },
  methods: {
    add () {
      this.$router.push({ name: `${this.itemType}Edit`, params: { itemId: 'add' } });
    }
  }
};
</script>
