<template>
  <div
    :style="{ maxWidth: '400px' }"
    class="mx-auto"
  >
    <FormBase @submit="handleSubmit">
      <template #header>
        <div>
          <p class="mb-0">
            {{ $t('auth.sign-in-to-arc') }}
          </p>
          <LinkBase
            route-name="signUp"
            :text="$t('auth.go-sign-up')"
            class="text-subtitle-2"
          />
        </div>
      </template>

      <template #default>
        <ControlEmail
          id="email"
          v-model="email"
          :label="$t('auth.email')"
          rules="required"
        />
        <ControlPassword
          id="password"
          v-model="password"
          :labels="$t('auth.password')"
          rules="required"
        />
      </template>

      <template #footer>
        <ButtonPrimary
          id="sign-in"
          :label="$t('auth.sign-in')"
        />
      </template>
    </FormBase>
    <MessageError
      :error-message="errorMessage"
      class="mt-2"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {
  FormBase,
  ControlEmail,
  ControlPassword,
  ButtonPrimary,
  LinkBase,
  MessageError
} from '../components';

export default {
  name: 'PageSignIn',
  components: {
    FormBase,
    ControlEmail,
    ControlPassword,
    ButtonPrimary,
    MessageError,
    LinkBase
  },
  data () {
    return {
      email: '',
      password: '',
      errorMessage: null
    };
  },
  methods: {
    ...mapActions(['signInAction']),
    async handleSubmit () {
      try {
        const method = 'email';
        const credentials = { email: this.email, password: this.password };
        await this.signInAction({ method, credentials });
      } catch (error) {
        if (error.isOperational) {
          this.errorMessage = {
            code: error.code,
            text: this.$t(error.description)
          };
        } else {
          throw error;
        }
      }
    }
  }
};
</script>
