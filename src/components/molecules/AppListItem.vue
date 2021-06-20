<template>
  <li :class="classNames"><slot></slot></li>
</template>

<script>
export default {
  name: 'AppListItem',
  props: {
    row: {
      type: Boolean,
      default: false,
    },
    // TODO: il est possible que le active doit être mis dans le parent via la classe automatique
    active: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classNames() {
      const classNames = []

      if (this.row) classNames.push('py-1 px-2 border-r-2 inline')
      else classNames.push('border-b-2 p-4')

      if (this.active) classNames.push('border-grey-base text-primary-dark')
      else classNames.push('border-grey-light')

      if (this.link) classNames.push('text-primary-base')

      return classNames.join(' ')
    },
  },
}
</script>
