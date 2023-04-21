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
import { required } from 'src/utilities/validation';
import messages from 'src/data/messages';
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    label: {
      type: String,
      default: messages.field.contactName
    },
    filled: {
      type: Boolean,
      default: true
    },
    rules: {
      type: Array,
      default: () => [(value) => required(value)]
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
