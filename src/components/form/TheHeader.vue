<template>
  <component :is="tag" class="text-primary q-my-sm text-bold">
    {{ title }}
  </component>
  <p v-if="desc" class="text-grey">{{ desc }}</p>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: 'Form',
      required: true
    },
    tag: {
      type: String,
      default: 'h6'
    },
    desc: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped></style>
