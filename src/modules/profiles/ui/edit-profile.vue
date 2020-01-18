<template>
  <FormEdit
    #default="{ item: profile }"
    :fetch-action="fetch"
    :save-action="save"
  >
    <ControlEmail
      v-model="profile.title"
      read-only
    />
    <ControlLocales
      v-model="profile.lang"
      :is-required="true"
    />
  </FormEdit>
</template>

<script>
import { p } from '@/common/components-helpers';
import { FormEdit, ControlEmail } from '@/core/components';
import ControlLocales from './control-locales';

export default {
  name: 'EditProfile',
  components: {
    FormEdit,
    ControlEmail,
    ControlLocales
  },
  props: {
    profileId: p(String)
  },
  data () {
    return {
      fetch: () => true,
      save: profile => true
    };
  }
};
</script>
