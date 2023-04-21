<template>
  <q-btn
    :color="color"
    :label="label"
    :loading="loading"
    :icon="icon"
    @click="$emit('click')"
  >
    <slot></slot>
  </q-btn>
</template>

<script>
export default {
  name: 'BiButton',
  props: {
    label: {
      type: String,
      default: 'Submit'
    },
    icon: {
      type: String,
      default: undefined
    },
    loading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
};
</script>
