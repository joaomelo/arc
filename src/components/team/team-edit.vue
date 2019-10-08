<template>
  <ItemEdit
    :item-id="itemId"
    item-type="team"
    #default="{item: team}"
  >
    <TextControl
      v-model="team.title"
      label="Title"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';

export default {
  name: 'TeamEdit',
  components: {
    ItemEdit,
    TextControl
  },
  props: {
    itemId: p(String)
  }
};
</script>
