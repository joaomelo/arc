<template>
  <ItemEdit
    :item-id="itemId"
    getter="getAsset"
    action="addAsset"
    #default="{item}"
  >
    <TextControl
      v-model="item.alias"
      label="Alias"
    />
    <TextControl
      v-model="item.title"
      label="Title"
    />
  </ItemEdit>
</template>

<script>
import itemEditMixin from '@/components/item/item-edit-mixin.js';
export default {
  name: 'AssetEdit',
  mixins: [itemEditMixin]
};
</script>

<style>

</style>
