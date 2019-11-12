<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="teams"
    #default="{ clone }"
  >
    <TextControl
      v-model="clone.title"
      :label="$t('fields.common.title')"
    />
    <ControlRelationship
      v-model="clone.parent"
      :label="$t('fields.teams.parent')"
      :items="$store.getters.getOtherTeams(clone.id)"
    />
    <TextControl
      v-if="clone.owner"
      v-model="clone.owner.title"
      :label="$t('fields.teams.owner')"
      read-only
    />
    <ControlRelationship
      v-model="clone.managers"
      :label="$t('fields.teams.managers')"
      :is-required="false"
      :is-single="false"
      :items="$store.getters.getOtherProfiles"
    />
    <ControlRelationship
      v-model="clone.staff"
      :label="$t('fields.teams.staff')"
      :is-required="false"
      :is-single="false"
      :items="$store.getters.getOtherProfiles"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@/helpers/props.js';
import ItemEdit from '@/components/item/item-edit.vue';
import TextControl from '@/components/base/text-control.vue';
import ControlRelationship from '@/components/forms/control-relationship.vue';

export default {
  name: 'TeamEdit',
  components: {
    ItemEdit,
    TextControl,
    ControlRelationship
  },
  props: {
    itemId: p(String)
  }
};
</script>
