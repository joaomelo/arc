<template>
  <div>
    <div
      v-for="item in myTeams"
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
  apollo: {
    myTeams: gql`
      query MyTeams {
        myTeams {
          id,
          name
        }
      }
    `
  }
};
</script>
