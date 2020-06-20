<template>
  <ControlSelect
    :value="value"
    :label="$t('modules.i18n.language')"
    :options="locales"
    :is-readonly="isReadonly"
    :is-required="isRequired"
    :is-multiple="false"
    :is-object-driven="false"
    @input="update"
  />
</template>

<script>
import { p } from '__cli/common/components-helpers';
import { ControlSelect } from '__cli/core/components';
import { supportedLocales } from '../data';

export default {
  components: { ControlSelect },
  props: {
    value: p(String, null),
    isReadonly: p(Boolean, false),
    isRequired: p(Boolean, false)
  },
  computed: {
    locales () {
      return Object.values(supportedLocales);
    }
  },
  methods: {
    update (value) {
      this.$emit('input', value);
    }
  }
};
</script>
