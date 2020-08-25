<template>
  <div>
    <h1>Dashboard</h1>
    <ListTeams />
  </div>
</template>

<script>
import { ListTeams } from '__cli/modules/teams';

export default {
  name: 'PageDashboard',
  components: { ListTeams }
};
</script>
