<template>
  <ApolloMutation
    clientId="public"
    :mutation="
      (gql) =>
        gql`
          ${$options.sendOtpGql}
        `
    "
    :variables="variables"
    @done="onDone"
    @error="(error) => notifyError(error.message)"
    v-slot="{ mutate, loading }"
  >
    <q-form @submit="mutate()" class="q-gutter-md">
      <MobileNumber v-model="mobile" />
      <EmailInput v-model="email" />

      <PrimaryButton
        label="Get OTP"
        type="submit"
        :loading="loading"
        icon="wifi_protected_setup"
      />
    </q-form>
  </ApolloMutation>
</template>

<script>
import EmailInput from 'components/form/inputs/Email.vue';
import MobileNumber from 'src/components/form/inputs/MobileNumber.vue';

import sendOtpGql from 'graph/otp/send.gql';
import { useAlert } from 'composables/useAlert';
export default {
  sendOtpGql,
  components: {
    EmailInput,
    MobileNumber
  },
  props: {},
  data() {
    return {
      mobile: '',
      email: ''
    };
  },
  computed: {
    variables() {
      return {
        input: {
          mobileNo: this.mobile,
          email: this.email,
          codeFor: 'sign_up'
        }
      };
    },
    formState() {
      return {
        // input: {
        mobileNo: this.mobile,
        email: this.email
        // }
      };
    }
  },
  setup() {
    const { notifyError, notifySuccess } = useAlert();

    return {
      notifyError,
      notifySuccess
    };
  },
  methods: {
    onDone() {
      this.notifySuccess('Otp sent successfully.');
      this.$emit('next', this.formState);
    }
  }
};
</script>

<style lang="scss" scoped></style>
