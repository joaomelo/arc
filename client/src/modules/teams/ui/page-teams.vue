<template>
  <PageItems>
    <template v-slot:bar>
      <BtnAdd @add="$router.push({name: 'teams-add'})" />
    </template>
    <template>
      <ListItems
        :view-component="TeamView"
        :items="teamsCollection.items"
      />
    </template>
  </PageItems>
</template>

<script>
import { BtnAdd } from '__cli/core/components';
import { PageItems, ListItems } from '__cli/modules/items';
import { teamsCollection } from '../domain';
import TeamView from './team-view';

export default {
  name: 'PageTeams',
  components: { BtnAdd, PageItems, ListItems },
  data () {
    return {
      TeamView,
      teamsCollection
    };
  }
};
</script>
