<template>
  <div v-if="value" class="fixed top-0 bottom-0 right-0 left-0 z-10 flex flex-row justify-end">
    <div class="absolute w-full h-full" @click="close"></div>
    <div class="relative h-full w-9/12 bg-white-base space-y-8">
      <div class="flex justify-end pt-4 px-4">
        <AppButton empty @click="close">
          <IconDismiss class="text-primary-base h-8 w-8 fill-current" />
        </AppButton>
      </div>
      <AppList class="px-4" :list="list"></AppList>
      <div class="space-y-2">
        <div class="flex justify-center space-x-4">
          <slot name="actions"></slot>
        </div>
        <div class="flex flex-col items-center space-y-2">
          <slot name="errors"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppList from '../molecules/AppList'
import AppButton from '../atoms/AppButton.vue'
import IconDismiss from '../atoms/icons/IconDismiss'

export default {
  name: 'TheNavMobile',
  components: { AppList, IconDismiss, AppButton },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    close() {
      this.$emit('close', false)
    },
  },
}
</script>
