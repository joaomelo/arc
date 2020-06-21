<template>
  <ItemsList
    :view-component="TeamView"
    :items="teams"
  />
</template>

<script>
import { ItemsList } from '__cli/modules/items';
import { teamsCollection } from '../domain';
import TeamView from './team-view';

export default {
  name: 'TeamsPage',
  components: { ItemsList },
  data () {
    return {
      TeamView,
      teams: teamsCollection.items
    };
  }
};
</script>
