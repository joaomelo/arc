<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-3">
    <span class="navbar-brand mb-0 h1">Arc <Version class="small" /></span>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarContent"
      class="collapse navbar-collapse"
    >
      <div class="navbar-nav mr-auto">
        <router-link
          v-for="link in links"
          :key="link.text"
          :to="{ name: link.route}"
          class="nav-item nav-link"
        >
          {{ link.text }}
        </router-link>
      </div>
      <div class="navbar-nav">
        <router-link
          v-if="userId"
          :to="{ name: 'profileEdit', params: {itemId: userId}}"
          class="nav-item nav-link"
        >
          {{ $t('nav.account') }}
        </router-link>
        <LinkLogout class="nav-item nav-link" />
      </div>
    </div>
  </nav>
</template>

<script>
import { LinkLogout } from '@/modules/auth';
import { Version } from '@/core/meta';

export default {
  name: 'NavbarDesktop',
  components: {
    LinkLogout,
    Version
  },
  computed: {
    userId () {
      // return this.$store.getters.getCurrentProfile ? this.$store.getters.getCurrentProfile.id : undefined;
      return undefined;
    },
    links () {
      return [
        // { text: this.$tc('collections.asset', 2), route: 'assetsList' },
        // { text: this.$tc('collections.result', 2), route: 'resultsList' },
        // { text: this.$tc('collections.challenge', 2), route: 'challengesList' },
        // { text: this.$tc('collections.team', 2), route: 'teamsList' }
      ];
    }
  }
};
</script>
