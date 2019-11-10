<template>
  <div id="app-canvas">
    <WatchLoading />
    <WatchAuth />
    <router-view />
  </div>
</template>

<script>
import WatchLoading from './components/watchers/watch-loading.vue';
import WatchAuth from './components/watchers/watch-auth.vue';
export default {
  name: 'App',
  components: { WatchLoading, WatchAuth }
};
</script>
