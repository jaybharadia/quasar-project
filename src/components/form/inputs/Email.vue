<template>
  <q-input
    :filled="filled"
    :model-value="modelValue"
    :label="label"
    lazy-rules
    @update:model-value="$emit('update:modelValue', $event)"
    :rules="rules"
  />
</template>

<script>
import { email as emailRule } from 'src/utilities/validation';

export default {
  props: {
    modelValue: String,
    label: {
      type: String,
      default: 'Email'
    },
    filled: {
      type: Boolean,
      default: true
    },
    rules: {
      type: Array,
      default: () => emailRule()
    }
  }
};
</script>

<style scoped></style>
