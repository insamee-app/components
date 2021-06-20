<template>
  <button
    class="focus:outline-none h-7 rounded"
    :class="classPaginateNumber"
    @click="$emit('click', $event)"
  >
    {{ value }}
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
    actif: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classPaginateNumber() {
      const classNames = []

      if (this.actif) classNames.push('bg-primary-dark text-white')
      else classNames.push('border border-primary-dark text-primary-base')

      if (this.small) classNames.push('w-6')
      else classNames.push('w-9')

      return classNames.join(' ')
    },
  },
}
</script>
