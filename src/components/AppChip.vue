<template>
  <component
    :is="component"
    class="bg-grey-base text-white text-sm rounded-full px-2 py-1 list-none"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'AppChip',
  props: {
    component: {
      type: String,
      default: 'span',
      validator: function (value) {
        return ['li', 'span'].indexOf(value) !== -1
      },
    },
  },
}
</script>
