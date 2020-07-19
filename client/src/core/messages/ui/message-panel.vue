<template>
  <v-snackbar
    v-model="showMessage"
    app
    bottom
    right
    :timeout="-1"
    :color="type"
  >
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        dark
        text
        v-bind="attrs"
        @click="showMessage = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { messageStore } from '../domain';

export default {
  name: 'MessagePanel',
  data () {
    return {
      messageStore,
      showMessage: false,
      type: 'info',
      text: ''
    };
  },
  watch: {
    'messageStore.message': function (message) {
      this.text = '';
      this.showMessage = false;
      if (message) {
        // setTimeout forces a transition in snackbar
        // couldn't make work with nextTick or forceUpdate
        setTimeout(() => this.updateMessage(message), 100);
      }
    }
  },
  methods: {
    updateMessage (message) {
      this.text = typeof message === 'string' ? message : message.text;
      this.type = message.type || 'info';
      this.showMessage = true;
    }
  }
};
</script>
