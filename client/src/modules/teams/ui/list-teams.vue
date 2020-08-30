<template>
  <div>
    <div
      v-for="item in teams"
      :key="item.id"
      :item="item"
    >
      <h1>{{ item.name }}</h1>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'ListTeams',
  data () {
    return {
      items: [{ id: 1, name: 'my team' }]
    };
  },
  apollo: {
    teams: gql`
      query Teams {
        teams {
          id,
          name
        }
      }
    `
  }
};
</script>
