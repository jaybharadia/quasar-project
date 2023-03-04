<template>
   <q-input :value="modelvalue" filled :type="isPwd ? 'password' : 'text'"  @input="$emit('update:modelvalue', $event)">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
</template>

<script>
export default {
  props: ['modelvalue'],
  data () {
    return {
      isPwd: true
    }
  }
}
</script>
