<template>
  <ItemEdit
    #default="{ clone: asset }"
    :item-id="itemId"
    item-collection="assets"
  >
    <ControlText
      v-model="asset.alias"
      :label="$t('fields.assets.alias')"
      is-required
    />
    <ControlText
      v-model="asset.title"
      :label="$t('fields.common.title')"
      is-required
    />
    <ControlSelect
      v-model="asset.arc"
      :label="$tc('collections.arc', 1)"
      :is-required="true"
      :is-object-driven="true"
      :options="$store.getters.getMyWriteArcs"
    />
    <ControlStatus
      v-model="asset.status"
    />
    <ControlTag
      v-model="asset.tags"
      :label="$t('fields.common.tags')"
    />
    <ControlTextarea
      v-model="asset.description"
      :label="$t('fields.common.description')"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/common/components-helpers';
import ItemEdit from '@/components/item/item-edit.vue';
import ControlText from '@/components/forms/control-text.vue';
import ControlTextarea from '@/components/forms/control-textarea.vue';
import ControlTag from '@/components/forms/control-tag.vue';
import ControlSelect from '@/components/forms/control-select.vue';
import ControlStatus from '@/components/forms/control-status.vue';

export default {
  name: 'AssetEdit',
  components: {
    ControlText,
    ControlTextarea,
    ItemEdit,
    ControlTag,
    ControlSelect,
    ControlStatus
  },
  props: {
    itemId: p(String)
  }
};
</script>
