<template>
  <div id="app-canvas">
    <WatchLoading />
    <WatchAuth />
    <WatchI18n />
    <router-view />
  </div>
</template>

<script>
import WatchLoading from '@/watchers/watch-loading.vue';
import WatchAuth from '@/watchers/watch-auth.vue';
import WatchI18n from '@/watchers/watch-i18n.vue';
export default {
  name: 'App',
  components: { WatchLoading, WatchAuth, WatchI18n }
};
</script>
