<template>
  <ItemEdit
    :item-id="itemId"
    item-type="team"
    #default="{item: team}"
  >
    <TextControl
      v-model="team.title"
      label="Title"
    />
    <RelationshipControl
      v-model="team.parent"
      label="Parent"
      :items="$store.getters.getOtherTeams(itemId)"
    />
    <TextControl
      v-if="team.owner"
      v-model="team.owner.title"
      label="Owner"
      read-only
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
