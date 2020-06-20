<template>
  <div>
    <v-main>
      <v-container
        fluid
        style="max-width: 500px;"
      >
        <v-row justify="center">
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <FooterConnection />
  </div>
</template>

<script>
import FooterConnection from './footer-connection';

export default {
  name: 'BaseContent',
  components: { FooterConnection }
};
</script>
