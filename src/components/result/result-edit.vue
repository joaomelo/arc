<template>
  <ItemEdit
    :item-id="itemId"
    item-type="result"
    #default="{item: result}"
  >
    <TextControl
      v-model="result.title"
      label="Title"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';

export default {
  name: 'ResultEdit',
  components: {
    ItemEdit,
    TextControl
  },
  props: {
    itemId: p(String)
  }
};
</script>
