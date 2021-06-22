<template>
  <section
    class="h-screen flex flex-col overflow-x-hidden relative"
    :class="around ? 'justify-around' : 'justify-center'"
  >
    <slot :graphicStyle="graphicClass"></slot>
  </section>
</template>

<script>
export default {
  name: 'FullContainer',
  props: {
    around: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    graphicClass() {
      return 'h-auto w-full md:w-1/2 mx-auto'
    },
  },
}
</script>
