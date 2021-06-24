<template>
  <div class="col-span-2">
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
      <slot></slot>
    </section>
    <slot name="pagination"></slot>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveListCards',
}
</script>
