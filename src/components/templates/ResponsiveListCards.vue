<template>
  <section class="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
    <template v-if="loading">
      <slot name="skeletons"></slot>
    </template>
    <template v-else>
      <slot name="cards"></slot>
    </template>
  </section>
</template>

<script>
export default {
  name: 'ResponsiveListCards',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
