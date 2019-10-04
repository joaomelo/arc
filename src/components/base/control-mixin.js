import ControlWrapper from './control-wrapper.vue';

export default {
  props: ['label', 'value'],
  components: {
    ControlWrapper
  },
  methods: {
    update (event) {
      this.$emit('input', event.target.value);
    }
  }
};
