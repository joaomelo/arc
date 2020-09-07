<template>
  <LoaderDialog
    :title="$t('profiles.update-preferences')"
    :action="() => updatePreferences()"
    :message="$t('profiles.preferences-updated')"
  >
    <ControlText
      v-model="currentUser.email"
      :label="$t('profiles.public-email')"
      readonly
      disabled
    />

    <ControlSelect
      v-model="currentUser.locale"
      :label="$t('profiles.language')"
      :items="supportedLocales"
      item-text="title"
      item-value="id"
      :rules="[v => !!v || this.$t('profiles.language-required')]"
      required
    />
  </LoaderDialog>
</template>

<script>
import { gql } from '@apollo/client/core';
import { LoaderDialog, ControlText, ControlSelect } from '__cli/core/components';
import { supportedLocales } from '__cli/core/i18n';

export default {
  name: 'PagePreferences',
  components: { LoaderDialog, ControlText, ControlSelect },
  apollo: {
    currentUser: gql`
      query CurrentUser {
        currentUser {
          email,
          locale
        }
      }
    `
  },
  data () {
    // console.log(this.currentUser);
    // const { publicEmail, locale } = getCurrentProfile();
    return {
      supportedLocales
    };
  },
  methods: {
    updatePreferences () {
      // const currentProfile = getCurrentProfile();
      // const id = currentProfile.id;
      // return profilesCollection.update({
      //   id,
      //   nickname: this.nickname,
      //   locale: this.locale
      // });
    }
  }
};
</script>
