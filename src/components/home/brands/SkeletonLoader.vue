<template>
  <div class="row q-gutter-md">
    <YoutubeSkeletonLoader
      :cardWidth="200"
      v-for="(_, index) in 10"
      :key="`youtube-skeleton-loader-${index}`"
    />
  </div>
</template>

<script>
import YoutubeSkeletonLoader from 'src/components/loader/skeleton/Youtube.vue';

export default {
  components: { YoutubeSkeletonLoader }
};
</script>

<style lang="scss" scoped></style>
