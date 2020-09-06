<template>
  <div>
    <div
      v-for="item in myArcs"
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
  name: 'ListArcs',
  apollo: {
    myArcs: gql`
      query MyArcs {
        myArcs {
          id,
          name
        }
      }
    `
  }
};
</script>
