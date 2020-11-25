<template>
  <span :id="$options.name" />
</template>

<script>
export default {
  name: 'MonitorAuth'
//   created(){
//     import { store } from '@/shared/store';
// export function guardRoutes (to, from, next) {
//   const isSignedIn = store.getters['usersStore/isSignedIn'];
//   const hasPrivate = to.matched.some(route => !route.meta.isPublic);
//   if (hasPrivate && !isSignedIn) {
//     next({ name: 'auth' });
//   } else {
//     next();
//   }
// }
// }
};
</script>

<style>

</style>
