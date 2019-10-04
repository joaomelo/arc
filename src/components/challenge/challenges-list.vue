<template>
  <ItemsList
    :view-component="viewComponent"
    type="challenge"
    getter="getChallenges"
    setter="setChallenges"
  />
</template>

<script>
import itemsListMixin from '@/components/item/items-list-mixin';
import ChallengeView from './challenge-view.vue';

export default {
  name: 'ChallengesList',
  mixins: [itemsListMixin],
  data () {
    return {
      viewComponent: ChallengeView
    };
  }
};
</script>
