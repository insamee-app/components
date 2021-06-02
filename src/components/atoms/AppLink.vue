<template>
  <component
    :is="component"
    :to="component === 'NuxtLink' ? link : undefined"
    :href="isAnchor ? link : undefined"
    :target="isAnchor ? '_blank' : undefined"
    :rel="isAnchor ? 'noreferrer noopener' : undefined"
    class="text-primary-base font-light"
    ><slot></slot
  ></component>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    link: {
      type: [Object, String],
      required: true,
    },
  },
  computed: {
    isAnchor() {
      return this.component === 'a'
    },
    component() {
      if (typeof this.link === 'object') return 'NuxtLink'

      if (typeof this.link === 'string' && this.link.includes('http'))
        return 'a'

      return 'a'
    },
  },
}
</script>
