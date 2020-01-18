<template>
  <ControlSelect
    :label="$t('modules.i18n.language')"
    :options="locales"
    :is-readonly="isReadonly"
    :is-required="isRequired"
    :is-multiple="false"
    :is-object-driven="true"
  />
</template>

<script>
import { p } from '@/common/components-helpers';
import { ControlSelect } from '@/core/components';
import { LOCALES } from '@/core/i18n'; ;

export default {
  components: { ControlSelect },
  props: {
    value: p(String, null),
    isReadonly: p(Boolean, false),
    isRequired: p(Boolean, false)
  },
  computed: {
    locales () {
      return Object.values(LOCALES);
    }
  }
};
</script>
