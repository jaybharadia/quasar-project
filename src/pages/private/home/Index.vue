<template>
  <router-view></router-view>
</template>

<script>
import { useMeta } from 'quasar';
export default {
  name: 'IndexPage',
  setup() {
    useMeta({
      titleTemplate: (title) => `${title} | Home`
    });
  }
};
</script>

<style lang="scss" scoped></style>
