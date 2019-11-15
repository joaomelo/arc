<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="results"
    #default="{ clone }"
  >
    <ControlText
      v-model="clone.title"
      :label="$t('fields.common.title')"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import ControlText from '@/components/forms/control-text.vue';

export default {
  name: 'ResultEdit',
  components: {
    ItemEdit,
    ControlText
  },
  props: {
    itemId: p(String)
  }
};
</script>
