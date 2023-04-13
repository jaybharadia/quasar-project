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
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: String,
    label: {
      type: String,
      default: 'Username *'
    },
    filled: {
      type: Boolean,
      default: true
    },
    rules: {
      type: Array,
      default: () => [(val) => (val && val.length > 0) || 'Field is required*']
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
