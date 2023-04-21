<template>
  <q-toggle
    :label="label"
    :leftLabel="leftLabel"
    :model-value="modelValue"
    :true-value="trueValue"
    :false-value="falseValue"
    @update:model-value="$emit('update:model-value', $event)"
  />
</template>

<script>
export default {
  props: {
    modelValue: [String, Boolean, Number],
    label: {
      type: String,
      default: 'Toggle'
    },
    leftLabel: {
      type: Boolean,
      default: false
    },
    trueValue: {
      type: [String, Boolean, Number],
      default: true
    },
    falseValue: {
      type: [String, Boolean, Number],
      default: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
