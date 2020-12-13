<template>
  <div>
    <FormBase
      title="Sing Up"
      @submit="handleSubmit"
    >
      <template #default>
        <ControlEmail
          id="email"
          v-model="email"
          label="E-mail"
          rules="required"
        />
        <ControlPasswordWithConfirmation
          v-model="password"
          :ids="['password','repeat-password']"
          :labels="['Password','Repeat password']"
          rules="required"
        />
      </template>
      <template #footer>
        <ButtonPrimary
          id="sign-up"
          label="Sign Up"
        />
      </template>
    </FormBase>
    <MessageError
      :error="error"
      class="mt-2"
    />
    <LinkBase
      route-name="signIn"
      text="Have a account? Go to SignIn"
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
