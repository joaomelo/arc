<template>
  <ItemsList
    :view-component="TeamView"
    :items="teamsCollection"
  />
</template>

<script>
import { ItemsList } from '__cli/core/components';
import { teamsCollection } from '../domain';
import TeamView from './team-view';

export default {
  name: 'TeamsPage',
  components: { ItemsList },
  data () {
    return {
      TeamView,
      teamsCollection
    };
  }
};
</script>
