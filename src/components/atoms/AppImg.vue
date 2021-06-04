<template>
  <component
    :is="name ? 'img' : 'div'"
    :src="url"
    :alt="name ? alt : undefined"
    :class="name ? '' : 'bg-primary-dark w-full h-full'"
  />
</template>

<script>
export default {
  name: 'AppImg',
  props: {
    baseUrl: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
    alt: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    url() {
      if (!this.name) return undefined
      return this.baseUrl + this.name
    },
  },
}
</script>
