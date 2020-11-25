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
import { MonitorAuth } from '@/business/users';
export default {
  name: 'App',
  components: { MonitorAuth }
};
</script>
