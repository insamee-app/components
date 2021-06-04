<template>
  <div v-if="value" class="fixed top-0 bottom-0 right-0 left-0 z-10 flex flex-row justify-end">
    <div class="absolute w-full h-full" @click="close"></div>
    <div class="relative h-full w-8/12 bg-white space-y-8">
      <div class="flex justify-end pt-4 px-4">
        <div @click="close" class="cursor-pointer">
          <IconDismiss class="text-primary-base h-8 w-8 fill-current" />
        </div>
      </div>
      <AppList class="px-4" :list="list"></AppList>
      <div class="flex justify-center">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AppList from '../molecules/AppList'
import IconDismiss from '../atoms/icons/IconDismiss'

export default {
  components: { AppList, IconDismiss },
  name: 'TheNavMobile',
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
