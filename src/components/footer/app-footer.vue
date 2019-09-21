<template>
  <footer class="bg-secondary mt-auto">
    <small class="text-light"><AppVersion /></small>
  </footer>
</template>
<script>
import AppVersion from './app-version.vue';
export default {
  name: 'AppFooter',
  components: {
    AppVersion
  }
};
</script>
<style lang="scss" scoped>
footer {
  text-align: center;
}
</style>
