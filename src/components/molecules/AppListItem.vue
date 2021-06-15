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
  },
  computed: {
    classNames() {
      const classNames = []

      if (this.row) classNames.push('p-1')
      else classNames.push('border-b-2 border-grey-base p-4')

      return classNames.join(' ')
    },
  },
}
</script>
