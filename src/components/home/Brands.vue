<template>
  <div>

    <q-card class="my-card">
      <q-img src="https://api-bii.preview.im/storage/brand-20/logo/b7b4bd3e-299e-45f5-b934-d471294158ab.png">
        <div class="absolute-bottom text-subtitle2 text-center">
          JK Lakshmi
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }

}
</script>

<style lang="scss" scoped>
.my-card
{

  width: 100%;
  max-width: 250px;
}
</style>
