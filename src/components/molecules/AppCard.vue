<template>
  <component
    :is="to ? 'NuxtLink' : 'div'"
    class="flex flex-col p-4 bg-white-base rounded-lg"
    :to="to"
    :class="classCard"
  >
    <slot name="header"></slot>
    <slot></slot>
    <slot name="actions"></slot>
  </component>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    to: {
      type: Object,
      default: undefined,
    },
    reduced: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classCard() {
      const classNames = []

      if (this.reduced) classNames.push('space-y-1')
      else classNames.push('space-y-4')

      return classNames.join(' ')
    },
  },
}
</script>
