<template>
  <PageItems
    :title="$tc('teams.team', 2)"
    :items="teamsCollection.items"
    @add="add"
  >
    <template v-slot:renderItem="{ item }">
      <CardTeam
        class="mt-2"
        :item="item"
        @edit="edit"
        @del="del"
      />
    </template>
  </PageItems>
</template>

<script>
import { PageItems } from '__cli/modules/items';
import { teamsCollection } from '../domain';
import CardTeam from './card-team';

export default {
  name: 'PageTeams',
  components: { PageItems, CardTeam },
  data () {
    return {
      CardTeam,
      teamsCollection
    };
  },
  methods: {
    add () {
      this.$router.push({ name: 'team-add' });
    },
    edit (id) {
      this.$router.push({ name: 'team-edit', params: { id } });
    },
    del (id) {
      this.teamsCollection.del(id);
    }
  }
};
</script>
