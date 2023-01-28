<template>
   <q-layout view="hHh LpR fFf">

<q-page-container class="fit row wrap justify-center items-center window-height">

  <GalleryCarousel class="carousel-section"/>

  <router-view />
</q-page-container>

</q-layout>
</template>

<script>
import GalleryCarousel from 'src/components/gallery/Carousel.vue'
export default {
  components: {
    GalleryCarousel
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

.carousel-section{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right:0;
  height: 100vh;
}
</style>
