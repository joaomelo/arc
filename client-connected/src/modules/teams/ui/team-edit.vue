<template>
  <ItemEdit
    #default="{ clone }"
    :item-id="itemId"
    item-collection="teams"
  >
    <ControlText
      v-model="clone.title"
      :label="$t('fields.common.title')"
    />
    <ControlText
      v-if="clone.owner"
      v-model="clone.owner.title"
      :label="$t('fields.teams.owner')"
      read-only
    />
    <ControlSelect
      v-model="clone.managers"
      :label="$t('fields.teams.managers')"
      :is-multiple="true"
      :is-object-driven="true"
      :options="$store.getters.getOtherProfiles"
    />
    <ControlSelect
      v-model="clone.staff"
      :label="$t('fields.teams.staff')"
      :is-multiple="true"
      :is-object-driven="true"
      :options="$store.getters.getOtherProfiles"
    />
  </ItemEdit>
</template>

<script>
import { p } from '__cli/common/components-helpers';
import ItemEdit from '__cli/components/item/item-edit.vue';
import ControlText from '__cli/components/forms/control-text.vue';
import ControlSelect from '__cli/components/forms/control-select.vue';

export default {
  name: 'TeamEdit',
  components: {
    ItemEdit,
    ControlText,
    ControlSelect
  },
  props: {
    itemId: p(String)
  }
};
</script>
