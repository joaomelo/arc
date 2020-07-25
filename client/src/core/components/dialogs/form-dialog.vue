<template>
  <BaseDialog
    :title="title"
  >
    <template v-slot:default>
      <v-form ref="form">
        <slot :itemClone="itemClone" />
      </v-form>
    </template>
    <template v-slot:actions>
      <SaveCancel
        @cancel="cancel"
        @save="save"
      />
    </template>
  </BaseDialog>
</template>

<script>
import { SaveCancel } from '../actions';
import BaseDialog from './base-dialog';

export default {
  name: 'FormDialog',
  components: { SaveCancel, BaseDialog },
  props: {
    title: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      itemClone: { ...this.item }
    };
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
        this.$emit('save', this.itemClone);
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
