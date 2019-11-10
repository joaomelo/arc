<template>
  <ItemEdit
    :item-id="itemId"
    item-collection="teams"
    #default="{ clone }"
  >
    <TextControl
      v-model="clone.title"
      label="Title"
    />
    <RelationshipControl
      v-model="clone.parent"
      label="Parent"
      :items="$store.getters.getOtherTeams(clone.id)"
    />
    <TextControl
      v-if="clone.owner"
      v-model="clone.owner.title"
      label="Owner"
      read-only
    />
    <RelationshipControl
      v-model="clone.managers"
      label="Managers"
      :is-required="false"
      :is-single="false"
      :items="$store.getters.getOtherProfiles"
    />
    <RelationshipControl
      v-model="clone.staff"
      label="Staff"
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
import RelationshipControl from '@/components/base/relationship-control.vue';

export default {
  name: 'TeamEdit',
  components: {
    ItemEdit,
    TextControl,
    RelationshipControl
  },
  props: {
    itemId: p(String)
  }
};
</script>
