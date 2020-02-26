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
import { p } from '@src/common/components-helpers';
import ItemEdit from '@src/components/item/item-edit.vue';
import ControlText from '@src/components/forms/control-text.vue';

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
