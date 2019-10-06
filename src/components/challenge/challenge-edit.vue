<template>
  <ItemEdit
    :item-id="itemId"
    item-type="challenge"
    #default="{item: challenge}"
  >
    <TextControl
      v-model="challenge.title"
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
