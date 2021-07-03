<template>
  <div
    v-if="value"
    class="flex items-center justify-center left-0 top-0 fixed w-full h-full bg-grey-light/70 z-30"
  >
    <div
      v-clickoutside="() => clickOutside()"
      v-scroll-lock="value"
      class="max-h-[90%] rounded m-6"
      :class="{ 'overflow-y-auto': overflow }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { clickOutside } from '../../directives'

export default {
  name: 'AppModal',
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    overflow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickOutside() {
      this.$emit('outside', false)
    },
  },
}
</script>
