<template>
  <q-input
    filled
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
    :label="label"
    mask="### - ### - ####"
    unmasked-value
    fill-mask="#"
    :rules="rules"
  />
</template>

<script>
import { mobileNumber as mobileNumberRule } from 'src/utilities/validation/index';
export default {
  props: {
    rules: {
      type: Array,
      default: () => mobileNumberRule()
    },
    modelValue: String,
    label: {
      type: String,
      default: 'Mobile Number'
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
