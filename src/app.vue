<template>
  <div
    id="app-canvas"
    class="d-flex flex-column"
  >
    <h1>Future Router View</h1>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from './components/footer/app-footer.vue';

export default {
  name: 'App',
  components: {
    AppFooter
  }
};
</script>

<style lang="scss">
#app-canvas {
    min-height: 100vh;
}
</style>
