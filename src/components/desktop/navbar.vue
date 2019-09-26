<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
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
          to="/assets"
        >
          Assets
        </router-link>
        <router-link
          class="nav-item nav-link"
          to="/results"
        >
          Results
        </router-link>
        <router-link
          class="nav-item nav-link"
          to="/challenges"
        >
          Challenges
        </router-link>
      </div>
      <span class="navbar-text"><AppVersion /></span>
      <div class="navbar-nav">
        <Logout class="nav-item nav-link" />
      </div>
    </div>
  </nav>
</template>

<script>
import Logout from './logout.vue';
import AppVersion from '@/components/app-version.vue';

export default {
  name: 'Navbar',
  components: {
    Logout,
    AppVersion
  }
};
</script>

<style>

</style>
