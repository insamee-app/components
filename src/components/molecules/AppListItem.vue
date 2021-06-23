<template>
  <li>
    <component
      :is="to || href ? 'AppButton' : 'div'"
      :class="clasLink"
      :to="to"
      :href="href"
      :empty="href || to ? true : false"
      :inline="href || to ? true : false"
    >
      <slot></slot>
    </component>
  </li>
</template>

<script>
import AppButton from '../atoms/AppButton'

export default {
  name: 'AppListItem',
  components: { AppButton },
  props: {
    row: {
      type: Boolean,
      default: false,
    },
    to: {
      type: Object,
      default: undefined,
    },
    href: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    clasLink() {
      const classNames = []

      if (this.row) classNames.push('py-1 px-2 border-r-2 inline')
      else classNames.push('border-b-2 p-4 block')

      classNames.push('border-grey-light')

      if (this.to || this.href)
        classNames.push('text-primary-base hover:text-primary-dark hover:border-grey-base')

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
