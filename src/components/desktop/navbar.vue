<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
    <span class="navbar-brand mb-0 h1">Arc</span>

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
          data-toggle="collapse"
          data-target="#navbarContent"
          class="nav-item nav-link"
        >
          {{ link.text }}
        </router-link>
      </div>
      <div class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            id="navbarDropdown"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ email }}
          </a>
          <div
            class="dropdown-menu"
            aria-labelledby="navbarDropdown"
          >
            <a
              class="dropdown-item"
              href="#"
            >
              Account
            </a>
            <Logout
              class="dropdown-item"
            />
            <div class="dropdown-divider" />
            <Version class="dropdown-item" />
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import Logout from './logout.vue';
import Version from './version.vue';

export default {
  name: 'Navbar',
  components: {
    Logout,
    Version
  },
  data () {
    const email = this.$store.getters.getCurrentProfile && this.$store.getters.getCurrentProfile.title;

    return {
      email,
      links: [
        { text: 'Assets', route: 'assetsList' },
        { text: 'Results', route: 'resultsList' },
        { text: 'Challenges', route: 'challengesList' },
        { text: this.$t('nav.teams'), route: 'teamsList' }
      ]
    };
  }
};
</script>

<style>

</style>
