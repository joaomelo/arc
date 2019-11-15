<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="assets"
    #default="{ clone: asset }"
  >
    <ControlText
      v-model="asset.alias"
      :label="$t('fields.assets.alias')"
    />
    <ControlText
      v-model="asset.title"
      :label="$t('fields.common.title')"
    />
    <ControlRelationship
      v-model="asset.team"
      :label="$tc('collections.team', 1)"
      :is-required="true"
      :is-single="true"
      :items="$store.getters.getTeams"
    />
    <ControlSelect
      v-model="asset.status"
      :label="$t('fields.assets.status.status')"
      :is-required="true"
      :is-single="true"
      :items="statuses"
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
import ControlRelationship from '@/components/forms/control-relationship.vue';
import ControlTag from '@/components/forms/control-tag.vue';
import ControlSelect from '@/components/forms/control-select.vue';
import { assetsStatuses } from './assets-statuses.js';

export default {
  name: 'AssetEdit',
  components: {
    ControlText,
    ControlTextarea,
    ItemEdit,
    ControlRelationship,
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
  },
  validations: {

  }
};
</script>
