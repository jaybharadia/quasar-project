<template>
  <q-page padding>
    <Brands />
  </q-page>
</template>

<script>
import Brands from 'src/components/home/brands/Brands.vue';
export default {
  name: 'HomePage',
  components: {
    Brands
  },

  data() {
    return {};
  }
};
</script>

<style scoped></style>
