<template>
  <div v-if="errorMessage" class="text-negative text-sm">
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
