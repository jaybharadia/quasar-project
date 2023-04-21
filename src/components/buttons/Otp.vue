<template>
  <BiButton
    label="GET OTP"
    icon="lock"
    :loading="loading"
    type="submit"
    color="primary"
  />
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
