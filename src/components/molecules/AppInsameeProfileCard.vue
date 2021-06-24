<template>
  <AppCard :closable="closable" :to="to">
    <div class="space-y-4">
      <div v-if="$slots.title || $slots.associations || $slots.avatar" class="flex flex-row">
        <slot name="avatar"></slot>
        <div
          v-if="$slots.title || $slots.associations"
          class="flex flex-col justify-between overflow-hidden ml-8 flex-1"
        >
          <slot name="title"></slot>
          <slot name="associations"></slot>
        </div>
      </div>
      <slot></slot>
      <slot name="chips"></slot>
      <slot name="text"></slot>
    </div>
    <div class="flex flex-row justify-end">
      <AppButton>Voir plus</AppButton>
    </div>
  </AppCard>
</template>

<script>
import AppButton from '../atoms/AppButton'
import AppCard from './AppCard'

export default {
  name: 'AppInsameeProfileCard',
  components: { AppCard, AppButton },
  props: {
    to: {
      type: Object,
      default: undefined,
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
