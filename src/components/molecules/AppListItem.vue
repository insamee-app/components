<template>
  <li>
    <component :is="to ? 'NuxtLink' : 'div'" :class="clasLink" :to="to">
      <slot></slot>
    </component>
  </li>
</template>

<script>
export default {
  name: 'AppListItem',
  props: {
    row: {
      type: Boolean,
      default: false,
    },
    to: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    clasLink() {
      const classNames = []

      if (this.row) classNames.push('py-1 px-2 border-r-2 inline')
      else classNames.push('border-b-2 p-4 block')

      classNames.push('border-grey-light')

      if (this.to) classNames.push('text-primary-base')

      return classNames.join(' ')
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply border-grey-base text-primary-dark;
}
</style>
