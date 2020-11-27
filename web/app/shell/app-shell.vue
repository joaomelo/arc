<template>
  <div>
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
export default {
  name: 'AppShell'
};
</script>
