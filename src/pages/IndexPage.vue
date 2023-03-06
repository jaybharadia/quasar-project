<template>
  <q-page>
    <div class="row q-gutter-md" v-if="brands.items.length">
      <q-card
        class="my-card"
        v-for="brand in brands.items"
        :key="`brand-${brand.id}`"
      >
        <q-img :src="brand.logo.url">
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ brand.name }}
          </div>
        </q-img>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useBrand } from 'src/composables/useBrand';
export default {
  name: 'IndexPage',
  setup() {
    const brands = useBrand();

    brands.getData();

    return {
      brands
    };
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped></style>
