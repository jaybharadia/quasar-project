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
export default {
  props: {
    modelValue: String,
    rules: {
      type: Array,
      default: () => [(val) => (val && val.length > 0) || 'Field is required*']
    },
    label: {
      type: String,
      default: 'Your password *'
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
