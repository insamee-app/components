<template>
  <label :for="name">{{ label }}</label>
</template>

<script>
export default {
  name: 'AppLabel',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
