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
import { GST as GstRule } from 'src/utilities/validation/index';
export default {
  props: {
    modelValue: String,
    label: {
      type: String,
      default: 'GST *'
    },
    filled: {
      type: Boolean,
      default: true
    },
    rules: {
      type: Array,
      default: () => [
        (val) => (val && val.length > 0) || 'Field is required*',
        (val) => GstRule(val)
      ]
    }
  }
};
</script>

<style lang="scss" scoped></style>
