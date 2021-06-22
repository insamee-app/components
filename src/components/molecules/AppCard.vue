<template>
  <component
    :is="to ? 'NuxtLink' : 'div'"
    class="flex flex-col p-4 bg-white rounded-lg space-y-4"
    :to="to"
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
  },
}
</script>
