<template>

<div class="q-pa-md" >
    <q-linear-progress indeterminate rounded  :color="color" v-for="(_, index ) in rows" :key="index " class="q-mt-sm" />

  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    rows: {
      type: Number,
      default: 4
    }
  }
}
</script>
