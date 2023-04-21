<template>
  <q-input
    :filled="filled"
    :model-value="modelValue"
    :label="label"
    @update:model-value="handleInput"
    :rules="rules"
    :loading="loading"
    ref="gstInput"
    lazy-rules
  />
</template>

<script>
import { GST as GstRule } from 'src/utilities/validation/index';
import messages from 'src/data/messages/index';
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
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
        (val) => (val && val.length > 0) || messages.validation.required,
        (val) => GstRule(val)
      ]
    }
  },
  methods: {
    handleInput($event) {
      this.$emit('update:modelValue', $event);

      const isValid = this.$refs.gstInput.validate($event);

      if (isValid && isValid instanceof Promise) {
        // It retusn Promise if rule is satisfied
        isValid.then(() => {
          this.$emit('valid', $event);
        });
      } else this.$emit('invalid');
    }
  }
};
</script>

<style lang="scss" scoped></style>
