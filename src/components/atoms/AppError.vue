<template>
  <div v-if="errorMessage" class="text-primary-dark text-xs">
    {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: 'AppError',
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
}
</script>
