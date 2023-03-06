<template>
  <SkeletonLoader v-if="brands.isLoading.value" />
  <div class="row q-gutter-md" v-else>
    <q-card
      class="my-card"
      v-for="brand in brands.items.value"
      :key="`brand-${brand.id}`"
    >
      <q-img :src="brand.logo.url" ratio="1" fit="contain">
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ brand.name }}
        </div>
      </q-img>

      <q-card-section v-if="brand.tag">
        <q-badge
          fab
          :color="$options.findTagColor(brand.tag)"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
          :label="brand.tag"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { useBrand } from 'src/composables/useBrand';

import findTagColor from 'src/data/brand/tag';
import SkeletonLoader from './SkeletonLoader.vue';
export default {
  findTagColor,
  components: {
    SkeletonLoader
  },

  props: {
    data: Array
  },

  setup() {
    const brands = useBrand();

    brands.getData();

    return {
      brands
    };
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 200px;
}
</style>
