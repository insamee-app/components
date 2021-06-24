<template>
  <ul class="flex flex-row w-full overflow-x-auto space-x-2">
    <AppChip v-for="text in texts" :key="text" component="li" class="whitespace-nowrap">{{
      text
    }}</AppChip>
  </ul>
</template>

<script>
import AppChip from '../atoms/AppChip'

export default {
  name: 'AppChips',
  components: { AppChip },
  props: {
    texts: {
      type: Array,
      required: true,
    },
  },
}
</script>
