<template>
  <a :href="link" target="_blank" rel="noreferrer noopener" :class="classAppLink">
    <slot></slot>
  </a>
</template>

<script>
import variant from '../../mixins/variant'

export default {
  name: 'AppLink',
  mixins: [variant],
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  computed: {
    classAppLink() {
      const classNames = []

      if (this.isPrimary) {
        classNames.push('text-primary-base hover:text-primary-dark')
      } else if (this.isSecondary) {
        classNames.push('text-secondary-base hover:text-secondary-dark')
      }
      return classNames.join(' ')
    },
  },
}
</script>
