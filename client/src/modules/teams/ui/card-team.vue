<template>
  <CardItem
    :item="item"
    :collection="teamsCollection"
    edit-route="team-edit"
  >
    <template v-slot:details>
      <CardItemDetail
        v-model="item.owner"
        :label="$t('teams.owner')"
        item-text="publicEmail"
        item-value="id"
        :items="profilesCollection.items"
      />
      <CardItemDetail
        v-model="item.editors"
        :label="$tc('teams.editors', 2)"
        item-text="publicEmail"
        item-value="id"
        :items="profilesCollection.items"
      />
      <CardItemDetail
        v-model="item.members"
        :label="$tc('teams.members', 2)"
        item-text="publicEmail"
        item-value="id"
        :items="profilesCollection.items"
      />
    </template>
  </CardItem>
</template>

<script>
import { CardItem, CardItemDetail } from '__cli/modules/items';
import { teamsCollection } from '../domain';
import { profilesCollection } from '__cli/modules/profiles';

export default {
  name: 'CardTeam',
  components: { CardItem, CardItemDetail },
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
