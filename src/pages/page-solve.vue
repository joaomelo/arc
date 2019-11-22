<template>
  <div class="text-center">
    Loading...
  </div>
</template>

<script>
export default {
  name: 'PageSolve',
  created () {
    this.$store.dispatch('setAuth');
  }
};
</script>
