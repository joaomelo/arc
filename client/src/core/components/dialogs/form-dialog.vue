<template>
  <BaseDialog :title="title">
    <template v-slot:default>
      <v-form ref="form">
        <slot />
      </v-form>
    </template>
    <template v-slot:actions>
      <BtnsSaveCancel
        @cancel="cancel"
        @save="save"
      />
    </template>
  </BaseDialog>
</template>

<script>
import { BtnsSaveCancel } from '../actions';
import BaseDialog from './base-dialog';

export default {
  name: 'FormDialog',
  components: { BtnsSaveCancel, BaseDialog },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  created () {
    document.addEventListener('keyup', this.keyPressed);
  },
  destroyed () {
    document.removeEventListener('keyup', this.keyPressed);
  },
  methods: {
    cancel () {
      this.$emit('cancel');
    },
    save () {
      if (this.$refs.form.validate()) {
        this.$emit('save');
      }
    },
    keyPressed (event) {
      if (event.keyCode === 27) {
        this.cancel();
      } else if (event.keyCode === 13) {
        this.save();
      }
    }
  }
};
</script>
