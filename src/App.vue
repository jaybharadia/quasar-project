<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import { useMeta } from 'quasar';

export default defineComponent({
  name: 'App',
  setup() {
    useMeta({
      title: 'BuildItIndia '
    });
  }
});
</script>
