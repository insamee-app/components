<template>
  <ul
    v-if="isVisible"
    class="shadow-lg rounded-b p-2 space-y-1 overflow-y-scroll max-h-60"
    :class="classSelectItems"
  >
    <slot></slot>
  </ul>
</template>

<script>
import { variant } from '../../mixins'

export default {
  name: 'SelectItems',
  mixins: [variant],
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classSelectItems() {
      const classNames = []

      if (this.border) classNames.push('bg-white')
      else classNames.push('text-white')

      if (this.isPrimary) {
        if (!this.border) classNames.push('bg-primary-dark')
      } else if (this.isSecondary) {
        if (!this.border) classNames.push('bg-secondary-dark')
      }

      return classNames.join(' ')
    },
  },
}
</script>
