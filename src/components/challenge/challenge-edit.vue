<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="challenges"
    #default="{ clone }"
  >
    <TextControl
      v-model="clone.title"
      label="Title"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';

export default {
  name: 'ChallengeEdit',
  components: {
    ItemEdit,
    TextControl
  },
  props: {
    itemId: p(String)
  }
};
</script>
