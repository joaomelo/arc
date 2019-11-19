<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="assets"
    #default="{ clone: asset }"
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
      :options="$store.getters.getMyTeams"
    />
    <ControlSelect
      v-model="asset.status"
      :label="$t('fields.assets.status.status')"
      :is-required="true"
      :options="statuses"
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
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import ControlText from '@/components/forms/control-text.vue';
import ControlTextarea from '@/components/forms/control-textarea.vue';
import ControlTag from '@/components/forms/control-tag.vue';
import ControlSelect from '@/components/forms/control-select.vue';
import { assetsStatuses } from './assets-statuses.js';

export default {
  name: 'AssetEdit',
  components: {
    ControlText,
    ControlTextarea,
    ItemEdit,
    ControlTag,
    ControlSelect
  },
  props: {
    itemId: p(String)
  },
  data () {
    return {
      statuses: assetsStatuses
    };
  }
};
</script>
