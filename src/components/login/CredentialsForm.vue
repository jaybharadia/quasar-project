<template>
  <ApolloMutation
    clientId="public"
    :mutation="
      (gql) =>
        gql`
          ${login}
        `
    "
    :variables="{
      username,
      password,
      defaultPartnerOtpSend: getOtpOnDefaultPartner
    }"
    @done="
      notifySuccess($event.data.login.message);
      $emit('credential-success', {
        username,
        password,
        getOtpOnDefaultPartner
      });
    "
    @error="(error) => notifyError(error.message)"
    v-slot="{ mutate, loading }"
  >
    <q-form @submit="mutate()" class="q-gutter-md">
      <UserName v-model="username" />

      <PasswordInput v-model="password" />

      <div>
        <q-toggle
          class="q-block"
          v-model="getOtpOnDefaultPartner"
          checked-icon="check"
          color="positive"
          label="Get OTP on Default Partner"
          unchecked-icon="clear"
        />
      </div>

      <OtpButton :loading="loading" />
    </q-form>
  </ApolloMutation>
</template>

<script>
import login from 'src/graph/auth/login.gql';
import { useAlert } from 'src/composables/useAlert';
import UserName from '../form/inputs/UserName.vue';
import PasswordInput from 'src/components/form/inputs/PasswordInput.vue';
import OtpButton from 'src/components/buttons/Otp.vue';
export default {
  components: {
    UserName,
    PasswordInput,
    OtpButton
  },
  setup() {
    const { notifyError, notifySuccess } = useAlert();

    return {
      login,
      notifyError,
      notifySuccess
    };
  },
  mounted() {},

  data() {
    return {
      username: 'jay',
      password: 'Dev@7$pan',
      confirmPassword: '',
      getOtpOnDefaultPartner: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
