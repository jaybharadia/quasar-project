<template>
  <div>
    <span>{{ label }} : </span>
    <span v-if="timer.days > 0">{{ timer.days }} : </span
    ><span v-if="timer.hours > 0">{{ timer.hours }} : </span
    ><span>{{ timer.minutes }}m : </span><span>{{ timer.seconds }}s</span>
  </div>
</template>

<script>
import { useTimer } from 'vue-timer-hook';
import { onMounted, watchEffect } from 'vue';
export default {
  emits: ['timeup'],
  setup(props, { emit }) {
    const time = new Date();
    time.setSeconds(time.getSeconds() + props.seconds); // 10 minutes timer

    const timer = useTimer(time);

    onMounted(() => {
      watchEffect(async () => {
        if (timer.isExpired.value) {
          console.warn('IsExpired');
          emit('timeup');
        }
      });
    });

    return {
      timer
    };
  },

  props: {
    seconds: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      default: 'Timer : '
    }
  }
};
</script>

<style lang="scss" scoped></style>
