<template>
  <component :is="name ? 'label' : 'div'" :for="name ? name : undefined" :class="classNames"
    ><slot>{{ label }}</slot></component
  >
</template>

<script>
import { variant } from '../../mixins'
export default {
  name: 'AppLabel',
  mixins: [variant],
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    input: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classNames() {
      const classNames = []

      if (this.input) {
        classNames.push('font-normal')
      } else {
        classNames.push('font-light')
      }

      if (this.isPrimary) classNames.push('text-grey-base')
      else if (this.isSecondary) classNames.push('text-grey-secondary-base')

      return classNames.join(' ')
    },
  },
}
</script>
