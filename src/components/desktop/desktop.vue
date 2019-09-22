<template>
  <div>
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from './navbar.vue';
export default {
  name: 'Dektop',
  components: {
    Navbar
  }
};
</script>

<style>

</style>
