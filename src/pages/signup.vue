<template>
  <q-card class="q-pa-md signup_card">
    <q-stepper v-model="step" ref="stepper" color="primary" animated>
      <q-step :name="1" title="GST" icon="label_important" :done="step > 1">
        <GstForm @next="next" />
      </q-step>

      <q-step :name="2" title="Details" icon="label_important" :done="step > 2">
        <DetailsForm @next="next" />
      </q-step>

      <q-step :name="3" title="OTP" icon="label_important" :done="step > 3">
        <OtpForm @next="next" />
      </q-step>

      <q-step :name="4" title="Submit" icon="label_important" :done="step > 4">
        <OtpVerification :form="form" />
      </q-step>
    </q-stepper>
  </q-card>
</template>

<script>
import DetailsForm from 'src/components/signup/Form.vue';
import OtpForm from 'components/signup/OtpForm.vue';
import OtpVerification from 'src/components/signup/OtpVerification.vue';
import GstForm from 'components/form/inputs/gst/Field.vue';
export default {
  components: {
    DetailsForm,
    OtpForm,
    OtpVerification,
    GstForm
  },
  data() {
    return {
      step: 1,
      form: {}
    };
  },
  methods: {
    next(data = {}) {
      this.form = {
        ...this.form,
        ...data
      };
      this.$refs.stepper.next();
    }
  }
};
</script>

<style scoped>
.signup_card {
  min-width: 400px;
}
</style>
