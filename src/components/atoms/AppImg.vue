<template>
  <component
    :is="link ? 'img' : 'div'"
    :src="link"
    :alt="link ? alt : undefined"
    :class="classAppImg"
  />
</template>

<script>
import variant from '../../mixins/variant'

export default {
  name: 'AppImg',
  mixins: [variant],
  props: {
    link: {
      type: String,
      default: undefined,
    },
    alt: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    classAppImg() {
      const classNames = []

      if (!this.link) {
        classNames.push('w-full h-full')
        if (this.isPrimary) {
          classNames.push('bg-primary-dark')
        } else if (this.isSecondary) {
          classNames.push('bg-secondary-dark')
        }
      }

      return classNames.join(' ')
    },
  },
}
</script>
