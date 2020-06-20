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
      v-model="asset.team"
      :label="$tc('collections.team', 1)"
      :is-required="true"
      :is-object-driven="true"
      :options="$store.getters.getMyWriteTeams"
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
import { p } from '@src/common/components-helpers';
import ItemEdit from '@src/components/item/item-edit.vue';
import ControlText from '@src/components/forms/control-text.vue';
import ControlTextarea from '@src/components/forms/control-textarea.vue';
import ControlTag from '@src/components/forms/control-tag.vue';
import ControlSelect from '@src/components/forms/control-select.vue';
import ControlStatus from '@src/components/forms/control-status.vue';

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
