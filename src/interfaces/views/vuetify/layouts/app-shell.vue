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
import { MonitorAuth } from '../users';

export default {
  name: 'AppShell',
  components: { MonitorAuth }
};
</script>
