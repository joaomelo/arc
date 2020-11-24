<template>
  <div>
    <button
      @click="commandSignIn({ email: 'joao@email.com' })"
    >
      Sign In
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import { uiWidget } from '@/core/firebase';

export default {
  name: 'FirebaseUi',
  // data () {
  //   console.log(uiWidget);
  //   return { uiWidget };
  // },
  methods: {
    ...mapActions('usersStore', ['commandSignIn'])
  }
};
</script>
