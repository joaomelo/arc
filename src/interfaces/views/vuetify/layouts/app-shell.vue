<template>
  <div>
    <MonitorAuth />
    <v-app>
      <v-main>
        <v-container
          fluid
          fill-height
        >
          <v-row>
            <v-col>
              <router-view />
            </v-col>
          </v-row>
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
