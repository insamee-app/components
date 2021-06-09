<template>
  <component :is="name ? 'label' : 'div'" :for="name ? name : undefined" :class="classNames">{{
    label
  }}</component>
</template>

<script>
export default {
  name: 'AppLabel',
  props: {
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    input: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classNames() {
      const classNames = []

      if (this.input) {
        classNames.push('font-normal')
      } else {
        classNames.push('font-light')
      }

      return classNames.join(' ')
    },
  },
}
</script>
