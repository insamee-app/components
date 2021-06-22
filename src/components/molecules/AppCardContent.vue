<template>
  <div :class="classDefault">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardContent',
  props: {
    justify: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classDefault() {
      const classNames = []

      classNames.push('text-base')

      if (this.justify) classNames.push('text-justify')

      return classNames.join(' ')
    },
  },
}
</script>
