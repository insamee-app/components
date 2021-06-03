<template>
  <ul class="flex flex-row w-full overflow-x-auto space-x-2">
    <AppChip v-for="text in texts" :key="text" component="li">{{ text }}</AppChip>
  </ul>
</template>

<script>
import AppChip from '../atoms/AppChip'

export default {
  components: { AppChip },
  name: 'AppChips',
  props: {
    texts: {
      type: Array,
      required: true,
    },
  },
}
</script>
