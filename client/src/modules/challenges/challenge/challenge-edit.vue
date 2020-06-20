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
import { p } from '__cli/common/components-helpers';
import ItemEdit from '__cli/components/item/item-edit.vue';
import ControlText from '__cli/components/forms/control-text.vue';

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
