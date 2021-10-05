<template>
  <Portal :disabled="disablePortal">
    <transition name="fade" appear @afterLeave="disablePortal = true">
      <div
        v-if="value"
        class="
          flex flex-col
          items-center
          justify-center
          left-0
          top-0
          fixed
          w-full
          h-full
          bg-grey-light/70
          z-30
        "
      >
        <div
          v-clickoutside="() => clickOutside()"
          v-scroll-lock="value"
          class="max-h-[90%] rounded m-6 w-full max-w-lg"
          :class="{ 'overflow-y-auto': overflow }"
        >
          <slot></slot>
        </div>
      </div>
    </transition>
  </Portal>
</template>

<script>
import { Portal } from '@linusborg/vue-simple-portal'
import { clickOutside } from '../../directives'

export default {
  name: 'AppModal',
  components: {
    Portal,
  },
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
  data() {
    return {
      disablePortal: false,
    }
  },
  watch: {
    value(v) {
      if (v) {
        this.disablePortal = false
        window.addEventListener('keydown', this.onKeydown)
      }
    },
  },
  methods: {
    onKeydown(event) {
      if (event && event.key === 'Escape') {
        this.close()
      }
    },
    clickOutside() {
      this.close()
    },
    close() {
      window.removeEventListener('keydown', this.onKeydown)
      this.$emit('outside', false)
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
