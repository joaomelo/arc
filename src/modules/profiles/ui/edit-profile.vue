<template>
  <ItemEdit
    #default="{ item: profile }"
    :item-id="itemId"
    :fetch-action="fetchAction"
    :add-action="addAction"
    :update-action="updateAction"
  >
    <ControlEmail
      v-model="profile.title"
      is-readonly
    />
    <ControlLocales
      v-model="profile.lang"
      :is-required="true"
    />
  </ItemEdit>
</template>

<script>
import { p } from '@src/common/components-helpers';
import { ItemEdit, ControlEmail } from '@src/core/components';
import { ControlLocales } from '@src/core/i18n';
import { getProfile, updateProfile } from '../data';

export default {
  name: 'EditProfile',
  components: {
    ItemEdit,
    ControlEmail,
    ControlLocales
  },
  props: {
    itemId: p(String)
  },
  data () {
    return {
      fetchAction: getProfile,
      updateAction: updateProfile,
      addAction: item => { throw new Error('manually creation of profiles is not supported'); }
    };
  }
};
</script>
