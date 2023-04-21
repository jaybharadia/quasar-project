<template>
  <q-input
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
    :label="label"
    mask="#_#_#_#"
    unmasked-value
    fill-mask="#"
    :rules="[(val) => (val && val.length > 0) || $messages.validation.required]"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'OTP'
    }
  }
};
</script>
