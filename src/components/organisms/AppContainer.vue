<template>
  <section class="pt-20 px-4 pb-4 min-h-screen" :class="{ 'max-w-4xl': small }">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'AppContainer',
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
