<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col">
          <slot />
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
