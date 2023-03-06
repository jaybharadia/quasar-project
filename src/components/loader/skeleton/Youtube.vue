<template>
  <q-card flat :style="`max-width: ${cardWidth}px; width:${cardWidth}px`">
    <q-skeleton height="150px" square />

    <q-card-section>
      <q-skeleton type="text" class="text-subtitle1" />
      <q-skeleton type="text" width="50%" class="text-subtitle1" />
      <q-skeleton type="text" class="text-caption" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    cardWidth: {
      type: Number,
      default: 300
    }
  }
};
</script>

<style lang="scss" scoped></style>
