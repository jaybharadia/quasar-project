<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';
import { project } from '../package.json';
export default defineComponent({
  name: 'App',
  setup() {
    useMeta({
      title: project.name
    });
  }
});
</script>
