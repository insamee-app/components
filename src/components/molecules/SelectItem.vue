<template>
  <li
    class="focus:outline-none py-1 px-2 rounded cursor-pointer"
    :class="classSelectItem"
    @click="selected"
  >
    <slot :item="item">{{ item.text }}</slot>
  </li>
</template>

<script>
import { variant } from '../../mixins'

export default {
  name: 'SelectItem',
  mixins: [variant],
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    border: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classSelectItem() {
      const classNames = []

      if (this.isPrimary) {
        if (this.border) classNames.push('hover:bg-grey-light hover:text-primary-dark')
        else classNames.push('hover:bg-grey-dark')
      } else if (this.isSecondary) {
        if (this.border) classNames.push('hover:bg-grey-secondary-light hover:text-secondary-dark')
        else classNames.push('hover:bg-grey-secondary-dark')
      }

      if (this.isSelected) {
        if (this.isPrimary) {
          if (this.border) classNames.push('bg-grey-light text-primary-dark')
          else classNames.push('bg-grey-dark')
        } else if (this.isSecondary) {
          if (this.border) classNames.push('bg-grey-secondary-light text-secondary-dark')
          else classNames.push('bg-grey-secondary-dark')
        }
      }

      return classNames.join(' ')
    },
  },
  methods: {
    selected() {
      this.$emit('selected', this.item)
    },
  },
}
</script>
