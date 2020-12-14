<template>
  <div>
    <MonitorAuth />
    <v-app>
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { MonitorAuth } from '../auth';

export default {
  name: 'AppShell',
  components: { MonitorAuth }
};
</script>
