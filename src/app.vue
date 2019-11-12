<template>
  <div id="app-canvas">
    <WatchLoading />
    <WatchAuth />
    <WatchI18n />
    <router-view />
  </div>
</template>

<script>
import WatchLoading from './components/watchers/watch-loading.vue';
import WatchAuth from './components/watchers/watch-auth.vue';
import WatchI18n from './components/watchers/watch-i18n.vue';
export default {
  name: 'App',
  components: { WatchLoading, WatchAuth, WatchI18n }
};
</script>
