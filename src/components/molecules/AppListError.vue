<template>
  <ul v-if="errors.length" class="text-center">
    <li v-for="error in list" :key="error.message"><AppError :error-message="error.message" /></li>
  </ul>
</template>

<script>
import AppError from '../atoms/AppError'

export default {
  name: 'AppListError',
  components: { AppError },
  props: {
    errors: {
      type: Array,
      required: true,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    list() {
      if (this.full) return this.errors

      return [this.errors[0]]
    },
  },
}
</script>
