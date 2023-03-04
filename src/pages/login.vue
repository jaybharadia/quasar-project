<template>
  <div class="q-pa-md">
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
          />
        </q-step>
      </q-stepper>
    </q-card>
  </div>
</template>

<script>
import { useForm } from 'src/composables/useForm';
import CredentialsForm from 'src/components/login/CredentialsForm.vue';
import OtpForm from 'src/components/login/OtpForm.vue';
export default {
  components: {
    CredentialsForm,
    OtpForm
  },
  setup() {
    const form = useForm();

    return {
      form
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
