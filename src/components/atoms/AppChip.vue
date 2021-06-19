<template>
  <component
    :is="component"
    class="text-white text-sm rounded-full px-2 py-1 mb-0 list-none"
    :class="classChip"
  >
    <slot></slot>
  </component>
</template>

<script>
import vairant from '../../mixins/variant'

export default {
  name: 'AppChip',
  mixins: [vairant],
  props: {
    component: {
      type: String,
      default: 'span',
      validator(value) {
        return ['li', 'span'].includes(value)
      },
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classChip() {
      const classNames = []

      if (this.isPrimary) {
        classNames.push('bg-grey-base')
      } else if (this.isSecondary) {
        classNames.push('bg-grey-secondary-base')
      }

      if (this.small) {
        classNames.push('text-xs')
      } else {
        classNames.push('text-sm')
      }

      return classNames.join(' ')
    },
  },
}
</script>
