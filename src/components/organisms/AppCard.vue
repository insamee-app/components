<template>
  <component
    :is="to ? 'NuxtLink' : 'div'"
    class="flex flex-col p-4 bg-white rounded-lg space-y-4"
    :to="to"
  >
    <div v-if="$slots.header || closable" class="flex flex-row justify-between text-xl font-bold">
      <div class="truncate">
        <slot name="header"></slot>
      </div>
      <AppButton v-if="closable" empty fit class="w-6 h-6" @click="$emit('close', true)">
        <IconDismiss class="text-primary-dark fill-current w-6 h-6" />
      </AppButton>
    </div>
    <div v-if="$slots.default" class="text-base" :class="classDefault">
      <slot></slot>
    </div>
    <slot name="actions"></slot>
  </component>
</template>

<script>
import IconDismiss from '../atoms/icons/IconDismiss.vue'
import AppButton from '../atoms/AppButton.vue'

export default {
  name: 'AppCard',
  components: { IconDismiss, AppButton },
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
