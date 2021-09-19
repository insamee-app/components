<template>
  <div
    class="rounded-sm p-[2px] text-xs flex justify-center items-center"
    :class="classComboboxMultipleItem"
  >
    <span class="whitespace-nowrap">
      <slot name="item" :item="item">
        {{ item.text }}
      </slot>
    </span>
    <span
      class="ml-1 flex justify-center items-center rounded-sm cursor-pointer"
      :class="classIcon"
      tabindex="1"
      @click.stop="$emit('removed', item)"
      @keydown.enter="$emit('removed', item)"
    >
      <IconDismiss class="h-3 w-3 fill-current" :class="classDismiss" />
    </span>
  </div>
</template>

<script>
import IconDismiss from '../atoms/icons/IconDismiss'
import { variant } from '../../mixins'

export default {
  name: 'ComboboxMultipleItem',
  components: { IconDismiss },
  mixins: [variant],
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    classComboboxMultipleItem() {
      const classNames = []

      classNames.push('text-white-base')

      if (this.isPrimary) {
        if (this.border) classNames.push('bg-primary-base')
        else classNames.push('bg-primary-dark')
      } else if (this.isSecondary) {
        if (this.border) classNames.push('bg-secondary-base')
        else classNames.push('bg-secondary-dark')
      }

      return classNames.join(' ')
    },
    classDismiss() {
      const classNames = []

      if (this.isPrimary) classNames.push('text-grey-light')
      else if (this.isSecondary) classNames.push('text-grey-secondary-light')

      return classNames.join(' ')
    },
    classIcon() {
      const classNames = []

      if (this.isPrimary) classNames.push('hover:bg-grey-dark')
      else if (this.isSecondary) classNames.push('hover:bg-grey-secondary-dark')

      return classNames.join(' ')
    },
  },
}
</script>
