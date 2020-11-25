<template>
  <PageItems
    :title="$tc('challenges.challenge', 2)"
    :items="challengesCollection.items"
    @add="add"
  >
    <template v-slot:renderItem="{ item }">
      <CardChallenge
        class="mt-2"
        :item="item"
      />
    </template>
  </PageItems>
</template>

<script>
import { PageItems } from '@/business/items';
import { challengesCollection } from '../domain';
import CardChallenge from './card-challenge';

export default {
  name: 'PageArcs',
  components: { PageItems, CardChallenge },
  data () {
    return {
      CardChallenge,
      challengesCollection
    };
  },
  methods: {
    add () {
      this.$router.push({ name: 'challenge-add' });
    }
  }
};
</script>
