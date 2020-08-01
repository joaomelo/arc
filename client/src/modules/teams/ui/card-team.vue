<template>
  <CardItem
    :item="item"
    :collection="teamsCollection"
    edit-route="team-edit"
  >
    <template v-slot:details>
      <LookupText
        :value="item.owner"
        :label="$t('teams.owner')"
        text-field="publicEmail"
        key-field="id"
        :items="profilesCollection.items"
      />
      <LookupText
        :value="item.editors"
        :label="$tc('teams.editors', 2)"
        text-field="publicEmail"
        key-field="id"
        :items="profilesCollection.items"
      />
      <LookupText
        :value="item.members"
        :label="$tc('teams.members', 2)"
        text-field="publicEmail"
        key-field="id"
        :items="profilesCollection.items"
      />
    </template>
  </CardItem>
</template>

<script>
import { LookupText } from '__cli/core/components';
import { CardItem } from '__cli/modules/items';
import { teamsCollection } from '../domain';
import { profilesCollection } from '__cli/modules/profiles';

export default {
  name: 'CardTeam',
  components: { CardItem, LookupText },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      teamsCollection,
      profilesCollection
    };
  }
};
</script>
