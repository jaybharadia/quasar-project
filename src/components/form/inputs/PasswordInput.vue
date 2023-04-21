<template>
  <q-input
    :model-value="modelValue"
    :filled="filled"
    :label="label"
    :rules="rules"
    lazy-rules
    :type="isPwd ? 'password' : 'text'"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>

<script>
import messages from 'src/data/messages';
import { required } from 'src/utilities/validation/index';
export default {
  props: {
    modelValue: String,
    rules: {
      type: Array,
      default: () => [(value) => required(value)]
    },
    label: {
      type: String,
      default: messages.auth.signup.password
    },
    filled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isPwd: true
    };
  }
};
</script>
