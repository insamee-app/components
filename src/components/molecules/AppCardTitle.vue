<template>
  <div class="truncate text-xl font-bold flex" :class="classTitle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    row: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classTitle() {
      const classNames = []

      if (this.row) classNames.push('flex-row space-x-4')
      else classNames.push('flex-col justify-center')

      return classNames.join(' ')
    },
  },
}
</script>
