<template>
  <EnhancedDialog
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
    <ControlText
      v-model="nickname"
      :label="$t('profiles.nickname')"
      is-required
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
  </EnhancedDialog>
</template>

<script>
import { EnhancedDialog, ControlText } from '__cli/core/components';
import { supportedLocales } from '__cli/core/i18n';
import { profilesCollection, getCurrentProfile } from '../domain';

export default {
  name: 'PagePreferences',
  components: { EnhancedDialog, ControlText },
  data () {
    const { publicEmail, nickname, locale } = getCurrentProfile();
    return {
      supportedLocales,
      publicEmail,
      nickname,
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
