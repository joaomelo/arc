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
        <LinkPreferences class="nav-item nav-link" />
        <LinkLogout class="nav-item nav-link" />
      </div>
    </div>
  </nav>
</template>

<script>
import { Version } from '@/core/meta';
import { LinkLogout } from '@/modules/auth';
import { LinkPreferences } from '@/modules/profiles';

export default {
  name: 'NavbarDesktop',
  components: {
    LinkPreferences,
    LinkLogout,
    Version
  },
  computed: {
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
