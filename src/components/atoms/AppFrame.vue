<template>
  <div
    class="flex flex-col justify-center align-middle text-center py-3 px-4 border rounded"
    :class="{ 'border-primary-dark': isPrimary, 'border-secondary-dark': isSecondary }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { variant } from '.../../mixins'

export default {
  name: 'AppFrame',
  mixins: [variant],
}
</script>
