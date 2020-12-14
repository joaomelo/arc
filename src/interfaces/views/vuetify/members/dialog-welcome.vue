<template>
  <div>
    <h1>Welcome {{ currentUserEmail }}</h1>
    <ContentDisclaimer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ContentDisclaimer from './content-disclaimer';

export default {
  name: 'DialogWelcome',
  components: { ContentDisclaimer },
  computed: {
    ...mapGetters('usersStore', ['currentUserEmail'])
  }
};
</script>
