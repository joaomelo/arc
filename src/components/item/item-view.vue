<template>
  <div class="card mb-3">
    <div class="card-body">
      <slot />
    </div>
    <div class="card-body pt-0 text-right">
      <BaseButton
        class="btn-primary"
        @click="edit"
      >
        edit
      </BaseButton>
      <BaseButton
        class="btn-secondary"
        @click="del"
      >
        delete
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { p } from '@/helpers/props.js';
import { mapStoreFunction } from '@/store/helpers.js';
import BaseButton from '@/components/base/base-button.vue';

export default {
  name: 'ItemView',
  components: { BaseButton },
  props: {
    itemType: p(String),
    itemId: p(String)
  },
  methods: {
    edit () {
      this.$router.push({ name: `${this.itemType}Edit`, params: { itemId: this.itemId } });
    },
    del () {
      this.$store.dispatch(mapStoreFunction(this.itemType, 'delAction'), this.itemId);
    }
  }
};
</script>
