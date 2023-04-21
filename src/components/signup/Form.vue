<template>
  <!-- <ApolloMutation
    clientId="public"
    :mutation="
      (gql) =>
        gql`
          ${$options.sendOtpGql}
        `
    "
    :variables="variables"
    @done="
      notifySuccess($messages.otp.send.success);
      $emit('next', formState);
    "
    @error="(error) => notifyError(error.message)"
    v-slot="{ mutate, loading }"
  > -->
  <q-form @submit="$emit('next', formState)" class="q-gutter-md">
    <TheHeader :title="$messages.auth.signup.title" />

    <ContactName v-model="name" />

    <ToggleInput label="Set GST as my username" v-model="setGstAsUsername" />
    <UserName v-model="username" v-if="setGstAsUsername ? false : true" />
    <PasswordInput v-model="password" />
    <PasswordInput
      v-model="confirmPassword"
      :label="$messages.auth.signup.confirmPassword"
      :rules="$options.confirmPasswordRule(password, confirmPassword)"
    />
    <!-- <OtpButton :loading="loading" /> -->

    <BiButton label="Next" type="submit" />
  </q-form>
  <!-- </ApolloMutation> -->
</template>

<script>
import PasswordInput from 'src/components/form/inputs/PasswordInput.vue';
import TheHeader from '../form/TheHeader.vue';
import { confirmPassword as confirmPasswordRule } from 'src/utilities/validation/index';
import ContactName from '../form/inputs/ContactName.vue';

import UserName from 'src/components/form/inputs/UserName.vue';
import ToggleInput from 'src/components/form/inputs/Toggle.vue';
// import OtpButton from 'src/components/buttons/Otp.vue';
import sendOtpGql from 'graph/otp/send.gql';
import { useAlert } from 'composables/useAlert';

export default {
  sendOtpGql,
  confirmPasswordRule,
  components: {
    PasswordInput,
    TheHeader,
    ContactName,
    UserName,
    ToggleInput
    // OtpButton
  },
  data() {
    return {
      password: '1234567890',
      confirmPassword: '1234567890',
      name: '7Span Harshil',
      username: null,
      setGstAsUsername: false
    };
  },
  setup() {
    const { notifyError, notifySuccess } = useAlert();

    return {
      notifyError,
      notifySuccess
    };
  },
  computed: {
    formState() {
      return {
        // input: {
        password: this.password,
        passwordConfirmation: this.confirmPassword,
        name: this.name,
        username: this.username,
        // },
        meta: {
          setGstAsUsername: this.setGstAsUsername
        }
      };
    }
  },
  methods: {
    toggleHandler(setGstAsUsername) {
      this.setGstAsUsername = setGstAsUsername;
    }
  }
};
</script>

<style scoped></style>
