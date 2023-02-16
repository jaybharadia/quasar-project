<template>
   <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
    <q-card bordered class=" my-card q-pa-m"  style="max-width: 400px">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Username *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Field is required*']"
      />

      <q-input
        filled
        type="password"
        :rules="[ val => val && val.length > 0 || 'Field is required*' ]"
        lazy-rules
        v-model="password"
        label="Your password *"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

      </q-card-section>
    </q-card>

    </q-form>
</template>

<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
