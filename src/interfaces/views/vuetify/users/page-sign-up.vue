<template>
  <div>
    <FormBase
      :title="$t('users.sign-up')"
      @submit="handleSubmit"
    >
      <template #default>
        <ControlEmail
          id="email"
          v-model="email"
          :label="$t('users.email')"
          rules="required"
        />
        <ControlPasswordWithConfirmation
          v-model="password"
          :ids="['password','repeat-password']"
          :labels="[$t('users.password'),$t('users.password-repeat')]"
          rules="required"
        />
      </template>
      <template #footer>
        <ButtonPrimary
          id="sign-up"
          :label="$t('users.sign-up')"
        />
      </template>
    </FormBase>
    <MessageError
      :error="error"
      class="mt-2"
    />
    <LinkBase
      route-name="signIn"
      :text="$t('users.go-sign-in')"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {
  FormBase,
  ControlEmail,
  ControlPasswordWithConfirmation,
  ButtonPrimary,
  LinkBase,
  MessageError
} from '../components';

export default {
  name: 'PageSignUp',
  components: {
    FormBase,
    ControlEmail,
    ControlPasswordWithConfirmation,
    ButtonPrimary,
    MessageError,
    LinkBase
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    ...mapActions(['signUpAction']),
    async handleSubmit () {
      try {
        const service = 'email';
        const credentials = { email: this.email, password: this.password };
        await this.signUpAction({ service, credentials });
      } catch (error) {
        this.error = { ...error };
      }
    }
  }
};
</script>
