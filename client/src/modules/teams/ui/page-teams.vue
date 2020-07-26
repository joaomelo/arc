<template>
  <PageItems
    :title="$tc('teams.team', 2)"
    :view="TeamView"
    :items="teamsCollection.items"
  >
    <BtnAdd @add="$router.push({name: 'teams-add'})" />
  </PageItems>
</template>

<script>
import { BtnAdd } from '__cli/core/components';
import { PageItems } from '__cli/modules/items';
import { teamsCollection } from '../domain';
import TeamView from './team-view';

export default {
  name: 'PageTeams',
  components: { BtnAdd, PageItems },
  data () {
    return {
      TeamView,
      teamsCollection
    };
  }
};
</script>
