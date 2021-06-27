<template>
  <AppCard class="animate-pulse">
    <div class="flex flex-col space-y-4">
      <div class="flex" :class="classHeader">
        <div class="bg-grey-base rounded-full" :class="classAvatar"></div>
        <div class="flex-1">
          <div class="bg-grey-base w-1/2 h-6 rounded-sm"></div>
          <div class="bg-grey-base w-2/5 h-6 rounded-sm mt-2"></div>
        </div>
      </div>
      <div class="w-full h-4 bg-grey-base rounded-sm"></div>
      <div class="flex flex-row justify-end">
        <div class="h-8 w-24 bg-grey-base rounded"></div>
      </div>
    </div>
  </AppCard>
</template>

<script>
import AppCard from '../molecules/AppCard'

export default {
  name: 'SkeletonCard',
  components: { AppCard },
  props: {
    variant: {
      type: String,
      default: 'profile',
      validator(value) {
        return ['profile', 'association'].includes(value)
      },
    },
  },
  computed: {
    isAssociation() {
      return this.variant === 'association'
    },
    isProfile() {
      return this.variant === 'profile'
    },
    classAvatar() {
      const classNames = []

      if (this.isProfile) classNames.push('w-32 h-32 mr-6')
      else if (this.isAssociation) classNames.push('w-16 h-16 ml-6')

      return classNames.join(' ')
    },
    classHeader() {
      const classNames = []

      if (this.isAssociation) classNames.push('flex-row-reverse')

      return classNames.join(' ')
    },
  },
}
</script>
