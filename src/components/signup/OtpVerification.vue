<template>
  <ApolloMutation
    clientId="public"
    :mutation="
      (gql) =>
        gql`
          ${$options.signupGql}
        `
    "
    :variables="variables"
    @done="afterSignup($event.signUp.token)"
    @error="(error) => notifyError(error.message)"
    v-slot="{ mutate, loading }"
  >
    <q-form @submit="mutate()" class="q-gutter-md">
      <div class="row items-center q-gutter-sm">
        <OtpInput class="col-4" v-model="otp.state.code" />
        <BiButton
          color="secondary"
          icon="wifi_protected_setup"
          label="Resend OTP"
          outline
          :loading="resendOtpLoading"
          :disable="otp.state.isResendOtpDisable"
          @click="mutateResendOtp()"
        />
      </div>

      <PrimaryButton
        label="Sign Up"
        type="submit"
        :loading="loading"
        icon="wifi_protected_setup"
      />

      <TimerDisplay
        v-if="otp.state.showTimer"
        :seconds="otp.state.timerSeconds"
        label="Resend OTP in"
        @timeup="otp.methods.onTimerExpire()"
      />
    </q-form>
  </ApolloMutation>
</template>

<script>
import sendOtpGql from 'graph/otp/send.gql';
import signupGql from 'graph/auth/signup.gql';
import { useOtp } from 'composables/useOtp';
import TimerDisplay from 'components/Timer.vue';
import { getCurrentInstance, inject } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { useAlert } from 'composables/useAlert';
import { useSignup } from 'composables/auth/useSignup';
import OtpInput from '../form/inputs/Otp.vue';
export default {
  sendOtpGql,
  signupGql,
  components: {
    TimerDisplay,
    OtpInput
  },
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  setup() {
    const otp = useOtp();
    const { notifyError, notifySuccess } = useAlert();

    const { afterSignup } = useSignup();

    const gqlTag = inject('$gql');

    const instance = getCurrentInstance();

    const {
      loading: resendOtpLoading,
      onDone,
      onError,
      mutate: mutateResendOtp
    } = useMutation(gqlTag`${sendOtpGql}`, {
      variables: instance.resendOtpState,
      clientId: 'public'
    });

    onDone((res) => {
      notifySuccess(instance.$messages.otp.send.success);
      otp.methods.onOtpSend();
    });

    onError((error) => {
      notifyError(error.message);
      otp.methods.resetOtp();
    });

    return {
      otp,
      mutateResendOtp,
      resendOtpLoading,
      afterSignup,
      notifyError,
      notifySuccess
    };
  },
  computed: {
    variables() {
      return {
        input: {
          // ...this.form.input,
          // gstNo: this.form.gstNo,
          ...this.form,
          code: this.otp.state.code,
          meta: undefined,
          username: this.form.meta.setGstAsUsername
            ? this.form.gstNo
            : this.form.username
        }
      };
    },
    resendOtpState() {
      return {
        input: {
          mobileNo: this.form.mobileNo,
          email: this.form.email,
          codeFor: 'sign_up'
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
