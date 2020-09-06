<template>
  <LoaderDialog
    :title="$t('profiles.update-preferences')"
    :action="() => updatePreferences()"
    :message="$t('profiles.preferences-updated')"
  >
    <ControlText
      v-model="publicEmail"
      :label="$t('profiles.public-email')"
      readonly
      disabled
    />

    <ControlSelect
      v-model="locale"
      :label="$t('profiles.language')"
      :items="supportedLocales"
      item-text="title"
      item-value="id"
      :rules="[v => !!v || this.$t('profiles.language-required')]"
      required
    />

    <v-select
      v-model="locale"
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
import { LoaderDialog, ControlText, ControlSelect } from '__cli/core/components';
import { supportedLocales } from '__cli/core/i18n';
import { profilesCollection, getCurrentProfile } from '../domain';

export default {
  name: 'PagePreferences',
  components: { LoaderDialog, ControlText, ControlSelect },
  data () {
    const { publicEmail, locale } = getCurrentProfile();
    return {
      supportedLocales,
      publicEmail,
      locale
    };
  },
  methods: {
    updatePreferences () {
      const currentProfile = getCurrentProfile();
      const id = currentProfile.id;
      return profilesCollection.update({
        id,
        nickname: this.nickname,
        locale: this.locale
      });
    }
  }
};
</script>
