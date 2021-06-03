<template>
  <component
    :is="name ? 'label' : 'div'"
    :for="name ? name : undefined"
    class="text-grey-base font-light"
    >{{ label }}</component
  >
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
  },
}
</script>
