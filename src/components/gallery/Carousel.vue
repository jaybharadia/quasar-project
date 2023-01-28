<template>
  <q-carousel
      animated
      v-model="slide"
      :navigation="false"
      infinite
      :autoplay="autoplay"
      :arrows="false"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="images/exhibition-1.jpeg" />
      <q-carousel-slide :name="2" img-src="images/exhibition-2.jpeg" />
      <q-carousel-slide :name="3" img-src="images/exhibition-3.jpeg" />
      <q-carousel-slide :name="4" img-src="images/exhibition-4.jpeg" />
      <q-carousel-slide :name="4" img-src="images/exhibition-5.jpeg" />
      <q-carousel-slide :name="4" img-src="images/exhibition-6.jpeg" />

    </q-carousel>
</template>

<script>
export default {
  data () {
    return {
      slide: null,
      autoplay: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
