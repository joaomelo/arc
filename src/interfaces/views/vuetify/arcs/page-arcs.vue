<template>
  <div
    :style="{ maxWidth: '200px' }"
    class="mx-auto"
  >
    <p>PageArcs Mock</p>
    <a
      id="action-sign-out"
      href="#"
      @click="signOutAction"
    >
      Sign Out
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PageArcs',
  computed: {
    ...mapGetters(['currentUserEmail'])
  },
  methods: {
    ...mapActions(['signOutAction'])
  }
};
</script>
