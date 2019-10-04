<template>
  <div class="mb-3">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar.vue';
export default {
  name: 'Desktop',
  components: {
    Navbar
  }
};
</script>
