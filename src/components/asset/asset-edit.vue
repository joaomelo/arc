<template>
  <ItemEdit>
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
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';

export default {
  name: 'AssetForm',
  components: {
    ItemEdit,
    TextControl
  }
};
</script>

<style>

</style>
