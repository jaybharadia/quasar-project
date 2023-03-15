<template>
  <div class="q-pa-md" transition="slide-left">
    <q-card bordered class="my-card q-pa-m">
      <q-stepper v-model="step" ref="stepper" color="primary" animated>
        <q-step
          :name="1"
          title="Enter Username and Password"
          icon="grid_view"
          :done="step > 1"
        >
          <CredentialsForm @credential-success="onCredentialSuccess" />
        </q-step>

        <q-step
          :name="2"
          title="Enter OTP"
          icon="create_new_folder"
          :done="step > 2"
        >
          <OtpForm
            :username="username"
            :password="password"
            :getOtpOnDefaultPartner="getOtpOnDefaultPartner"
            @login-success="afterLogin($event.token, $event)"
          />
        </q-step>
      </q-stepper>
    </q-card>
  </div>
</template>

<script>
import CredentialsForm from 'src/components/login/CredentialsForm.vue';
import OtpForm from 'src/components/login/OtpForm.vue';

import { useLogin } from 'src/composables/auth/useLogin';
import { useMeta } from 'quasar';
export default {
  components: {
    CredentialsForm,
    OtpForm
  },
  setup() {
    useMeta({
      titleTemplate: (title) => `${title} | Login`
    });

    const { afterLogin } = useLogin();

    return {
      afterLogin
    };
  },
  mounted() {},
  data() {
    return {
      step: 1,
      username: 'jay',
      password: 'Dev@7$pan',
      getOtpOnDefaultPartner: false
    };
  },

  methods: {
    onCredentialSuccess(data) {
      this.username = data.username;
      this.password = data.password;
      this.getOtpOnDefaultPartner = data.getOtpOnDefaultPartner;
      this.$refs.stepper.next();
    }
  }
};
</script>

<style lang="scss" scoped></style>
