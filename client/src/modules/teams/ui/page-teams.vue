<template>
  <ItemsList
    :view-component="TeamView"
    :items="teamsCollection.items"
  />
</template>

<script>
import { ItemsList } from '__cli/modules/items';
import { teamsCollection } from '../domain';
import TeamView from './team-view';

export default {
  name: 'PageTeams',
  components: { ItemsList },
  data () {
    return {
      TeamView,
      teamsCollection
    };
  }
};
</script>
