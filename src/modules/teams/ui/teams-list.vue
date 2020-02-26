<template>
  <ItemsList
    :view-component="viewComponent"
    item-type="team"
  />
</template>

<script>
import { ItemsList } from '@src/core/components';
import TeamView from './team-view';

export default {
  name: 'TeamsList',
  components: { ItemsList },
  data () {
    return {
      viewComponent: TeamView
    };
  }
};
</script>
