<template>
  <q-btn
    color="primary"
    :label="label"
    :icon="icon"
    :loading="loading"
    @click="$emit('click')"
  >
    <slot></slot>
  </q-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Submit'
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
