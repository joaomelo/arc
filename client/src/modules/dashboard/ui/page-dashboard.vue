<template>
  <div>
    <h1>Dashboard</h1>
    <ListArcs />
  </div>
</template>

<script>
import { ListArcs } from '__cli/modules/arcs';

export default {
  name: 'PageDashboard',
  components: { ListArcs }
};
</script>
