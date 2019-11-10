<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="assets"
    #default="{ clone: asset }"
  >
    <TextControl
      v-model="asset.alias"
      label="Alias"
    />
    <TextControl
      v-model="asset.title"
      label="Title"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';

export default {
  name: 'AssetEdit',
  components: { TextControl, ItemEdit },
  props: {
    itemId: p(String)
  }
};
</script>
