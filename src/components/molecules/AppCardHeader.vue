<template>
  <div class="flex flex-row justify-between">
    <slot></slot>
    <AppButton v-if="closable" empty fit class="w-6 h-6" @click="$emit('close', true)">
      <IconDismiss class="text-primary-dark fill-current w-6 h-6" />
    </AppButton>
  </div>
</template>

<script>
import IconDismiss from '../atoms/icons/IconDismiss.vue'
import AppButton from '../atoms/AppButton.vue'

export default {
  name: 'AppCardHeader',
  components: { IconDismiss, AppButton },
  props: {
    closable: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
