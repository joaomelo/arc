<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <!-- <router-view /> -->
        <v-btn
          elevation="2"
        >
          Hi
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { fb, auth, firestore } from '@/core/firebase';
export default {
  name: 'App',
  created () {
    console.log({ fb, auth, firestore });
  }
};
</script>
