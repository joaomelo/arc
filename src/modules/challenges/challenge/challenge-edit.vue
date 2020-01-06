<template>
  <ItemEdit
    #default="{ clone }"
    :item-id="itemId"
    item-collection="challenges"
  >
    <ControlText
      v-model="clone.title"
      :label="$t('fields.common.title')"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/common';
import ItemEdit from '@/components/item/item-edit.vue';
import ControlText from '@/components/forms/control-text.vue';

export default {
  name: 'ChallengeEdit',
  components: {
    ItemEdit,
    ControlText
  },
  props: {
    itemId: p(String)
  }
};
</script>
