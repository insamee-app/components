<template>
  <div
    v-if="value"
    class="absolute inset-0 flex flex-col items-center bg-grey-light/70 z-30 overflow-y-scroll p-4"
  >
    <div v-clickoutside="() => clickOutside()" v-scroll-lock="value">
      <slot size="sm:w-96"></slot>
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
  },
  methods: {
    clickOutside() {
      this.$emit('outside', false)
    },
  },
}
</script>
