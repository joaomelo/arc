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
          class="nav-item nav-link"
          :to="{ name: 'assetsList'}"
        >
          Assets
        </router-link>
        <router-link
          class="nav-item nav-link"
          :to="{ name: 'resultsList'}"
        >
          Results
        </router-link>
        <router-link
          class="nav-item nav-link"
          :to="{ name: 'challengesList'}"
        >
          Challenges
        </router-link>
      </div>
      <span class="navbar-text"><Version /></span>
      <div class="navbar-nav">
        <Logout class="nav-item nav-link" />
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
  }
};
</script>

<style>

</style>
