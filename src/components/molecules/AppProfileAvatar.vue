<template>
  <div class="relative mr-8" :class="classAppProfileAvatar">
    <div
      class="w-full h-full overflow-hidden rounded-full flex flex-row justify-center items-center"
    >
      <AppImg :variant="variant" :link="link" :alt="alt" />
    </div>
    <div v-if="label" class="absolute flex flex-row" :class="classAppChip">
      <AppChip class="border-white border-2" :small="small" :variant="variant">
        {{ label }}
      </AppChip>
    </div>
  </div>
</template>

<script>
import AppChip from '../atoms/AppChip'
import AppImg from '../atoms/AppImg.vue'
import variant from '../../mixins/variant'

export default {
  name: 'AppProfileAvatar',
  components: { AppChip, AppImg },
  mixins: [variant],
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: undefined,
    },
    link: {
      type: String,
      default: undefined,
    },
    alt: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    classAppProfileAvatar() {
      const classNames = []

      if (this.small) classNames.push('w-16 h-16')
      else classNames.push('w-32 h-32')

      return classNames.join(' ')
    },
    classAppChip() {
      const classNames = []

      if (this.small) classNames.push('top-full left-1/2 transform -translate-y-1/2 w-full')
      else classNames.push('-right-4 bottom-0')

      return classNames.join(' ')
    },
  },
}
</script>
