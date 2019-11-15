<template>
  <div class="text-center">
    Solving User...
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
