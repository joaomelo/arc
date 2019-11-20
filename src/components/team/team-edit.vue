<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="teams"
    #default="{ clone }"
  >
    <ControlText
      v-model="clone.title"
      :label="$t('fields.common.title')"
    />
    <ControlSelect
      v-model="clone.parent"
      :label="$t('fields.teams.parent')"
      :is-object-driven="true"
      :options="$store.getters.getOtherTeams(clone.id)"
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
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import ControlText from '@/components/forms/control-text.vue';
import ControlSelect from '@/components/forms/control-select.vue';

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
