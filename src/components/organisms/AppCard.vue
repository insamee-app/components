<template>
  <component
    :is="to ? 'NuxtLink' : 'div'"
    class="flex flex-col p-4 bg-white rounded-lg space-y-4"
    :to="to"
  >
    <div class="flex flex-row justify-between text-xl font-bold" v-if="$slots.header || closable">
      <div class="truncate">
        <slot name="header"></slot>
      </div>
      <AppButton empty fit v-if="closable" @click="$emit('close', true)" class="w-6 h-6">
        <IconDismiss class="text-primary-dark fill-current w-6 h-6" />
      </AppButton>
    </div>
    <div class="text-base" :class="classDefault" v-if="$slots.default">
      <slot></slot>
    </div>
    <slot name="actions"></slot>
  </component>
</template>

<script>
import IconDismiss from '../atoms/icons/IconDismiss.vue'
import AppButton from '../atoms/AppButton.vue'

export default {
  components: { IconDismiss, AppButton },
  name: 'AppCard',
  props: {
    to: {
      type: Object,
      default: undefined,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    justify: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classDefault() {
      const classNames = []

      if (this.justify) classNames.push('text-justify')

      return classNames.join(' ')
    },
  },
}
</script>
