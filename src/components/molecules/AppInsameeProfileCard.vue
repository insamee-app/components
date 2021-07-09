<template>
  <AppCard :closable="closable" :to="to" shadow :reduced="isSmall">
    <div :class="isSmall ? 'space-y-2' : 'space-y-6'">
      <div
        v-if="$slots.title || $slots.associations || $slots.avatar"
        class="flex flex-row mb-[1.125rem]"
      >
        <slot name="avatar"></slot>
        <div
          v-if="$slots.title || $slots.associations"
          class="flex flex-col justify-between items-end overflow-x-auto ml-8 flex-1"
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
    type: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium'].includes(value)
      },
    },
  },
  computed: {
    isSmall() {
      return this.type === 'small'
    },
  },
}
</script>
